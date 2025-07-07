
import { GoogleGenAI } from "@google/genai";
import { FarmerData, MarketReport, WeatherReport, Language, languages } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = 'gemini-2.5-flash-preview-04-17';

const parseJsonResponse = <T,>(text: string): T => {
  let jsonStr = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", e);
    console.error("Original text:", text);
    throw new Error("The AI returned a response in an unexpected format. Could not parse JSON.");
  }
};

const getLanguageInstruction = (language: Language): string => {
    const langInfo = languages[language];
    return `IMPORTANT: The entire response, including all text, labels, and justifications, MUST be in ${langInfo.name} (${language}).`;
}

export const getMarketAnalysis = async (location: string, language: Language): Promise<MarketReport[]> => {
  const prompt = `You are a Market Researcher AI specializing in agriculture. For the region of ${location}, analyze current market trends, crop pricing, and demand forecasts. Provide a list of the top 3 most profitable crops to plant. For each crop, include the estimated market price per unit (e.g., per kg, per bushel), demand level (High, Medium, Low), and a brief justification. Return the response as a valid JSON array with the exact structure: [{'cropName': string, 'pricePerUnit': string, 'demand': 'High' | 'Medium' | 'Low', 'justification': string}]. ${getLanguageInstruction(language)}`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });

  return parseJsonResponse<MarketReport[]>(response.text ?? "");
};

export const getWeatherForecast = async (location: string, language: Language): Promise<WeatherReport[]> => {
  const prompt = `You are a Weather Simulation AI. For the location "${location}", generate a realistic 5-day weather forecast. Include daily high/low temperatures (in Celsius), precipitation probability (as a percentage), and a brief weather summary (e.g., 'Sunny with light clouds'). Return the response as a valid JSON array with the exact structure: [{'day': string, 'highTempC': number, 'lowTempC': number, 'precipitationChance': number, 'summary': string}]. ${getLanguageInstruction(language)}`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });
  return parseJsonResponse<WeatherReport[]>(response.text ?? "");
};

export const getFarmingAdvice = async (farmerData: FarmerData, marketAnalysis: MarketReport[], weatherForecast: WeatherReport[], language: Language): Promise<string> => {
  const prompt = `
You are an expert Farmer Advisor AI, specializing in sustainable and profitable agriculture. Your goal is to provide a comprehensive, actionable farming plan.

Analyze the following data:

**1. Farmer's Profile:**
- Location: ${farmerData.location}
- Land Size: ${farmerData.landSize} acres
- Soil Type: ${farmerData.soilType}
- Financial Goal: ${farmerData.financialGoal}

**2. Market Analysis (Top Profitable Crops):**
${JSON.stringify(marketAnalysis, null, 2)}

**3. 5-Day Weather Forecast:**
${JSON.stringify(weatherForecast, null, 2)}

**Your Task:**
Based on ALL the information above, create a detailed and actionable farming plan. Your response must be formatted in markdown.
${getLanguageInstruction(language)}

The plan should:
- **Recommend the single best crop** to plant from the market analysis, justifying your choice by connecting it to the farmer's profile and goals.
- **Provide a step-by-step sustainable practices guide** tailored to the chosen crop and the farmer's specified soil type. Focus on practices that reduce water consumption, minimize soil erosion, and lower the farm's carbon footprint.
- **Suggest a high-level timeline** considering the weather forecast (e.g., "Begin soil preparation on a sunny day," "Delay planting if heavy rain is forecasted").
- **Conclude with an encouraging summary.**

Your advice should be practical, clear, and easy for a farmer to understand.
`;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: { thinkingConfig: { thinkingBudget: 0 } }
  });

  return response.text ?? "";
};
