
export interface FarmerData {
  location: string;
  landSize: number;
  soilType: string;
  financialGoal: string;
}

export interface MarketReport {
  cropName: string;
  pricePerUnit: string;
  demand: 'High' | 'Medium' | 'Low';
  justification: string;
}

export interface WeatherReport {
  day: string;
  highTempC: number;
  lowTempC: number;
  precipitationChance: number;
  summary: string;
}

export interface FinalRecommendation {
  marketAnalysis: MarketReport[];
  weatherForecast: WeatherReport[];
  farmingAdvice: string;
}

export enum AppStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export type Language = 'en' | 'hi' | 'mr' | 'gu';

export const languages: Record<Language, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी' },
  mr: { name: 'Marathi', nativeName: 'मराठी' },
  gu: { name: 'Gujarati', nativeName: 'ગુજરાતી' },
};
