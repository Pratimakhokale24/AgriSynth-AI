
import React from 'react';
import { FinalRecommendation, WeatherReport } from '../types';
import { AgentCard } from './AgentCard';
import { RecommendationChart } from './RecommendationChart';
import { BrainCircuitIcon, DollarSignIcon, SunIcon } from './icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLocalization } from '../App';

interface DashboardProps {
  recommendation: FinalRecommendation;
}

const WeatherForecastContent: React.FC<{ forecast: WeatherReport[] }> = ({ forecast }) => (
  <div className="space-y-3">
    {forecast.map((day, index) => (
      <div key={index} className="flex justify-between items-center text-sm p-2 rounded-md odd:bg-gray-100">
        <span className="font-semibold w-1/4">{day.day}</span>
        <span className="w-1/4 text-center">{day.lowTempC}°C / {day.highTempC}°C</span>
        <span className="w-1/4 text-center">{day.precipitationChance}% Rain</span>
        <span className="w-1/4 text-right text-gray-600">{day.summary}</span>
      </div>
    ))}
  </div>
);

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => (
    <div className="prose prose-sm max-w-none prose-h1:text-secondary-dark prose-h2:text-secondary-dark prose-strong:text-secondary-dark">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );

export const Dashboard: React.FC<DashboardProps> = ({ recommendation }) => {
  const { t } = useLocalization();
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-gray-800">{t('dashboardTitle')}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Recommendation Column */}
        <div className="lg:col-span-2">
          <AgentCard title={t('advisorCardTitle')} icon={<BrainCircuitIcon className="h-6 w-6" />}>
            <MarkdownRenderer content={recommendation.farmingAdvice} />
          </AgentCard>
        </div>

        {/* Side Column for Market & Weather */}
        <div className="space-y-8">
          <AgentCard title={t('marketCardTitle')} icon={<DollarSignIcon className="h-6 w-6" />}>
            <p className="text-sm text-gray-600 mb-4">{t('marketCardSubtitle')}</p>
            <RecommendationChart data={recommendation.marketAnalysis} />
          </AgentCard>

          <AgentCard title={t('weatherCardTitle')} icon={<SunIcon className="h-6 w-6" />}>
            <p className="text-sm text-gray-600 mb-4">{t('weatherCardSubtitle')}</p>
            <WeatherForecastContent forecast={recommendation.weatherForecast} />
          </AgentCard>
        </div>
      </div>
    </div>
  );
};
