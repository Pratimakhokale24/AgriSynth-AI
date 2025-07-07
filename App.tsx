
import React, { useState, useCallback, createContext, useContext, useMemo } from 'react';
import { FarmerInputForm } from './components/FarmerInputForm';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Loader } from './components/Loader';
import { getMarketAnalysis, getWeatherForecast, getFarmingAdvice } from './services/geminiService';
import { FarmerData, FinalRecommendation, AppStatus, Language } from './types';
import { translations } from './utils/translations';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | null>(null);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [recommendation, setRecommendation] = useState<FinalRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  }, [language]);
  
  const localizationContextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  const handleFormSubmit = useCallback(async (farmerData: FarmerData) => {
    setStatus(AppStatus.LOADING);
    setError(null);
    setRecommendation(null);

    try {
      console.log(`Fetching analysis in ${language}...`);
      const marketAnalysis = await getMarketAnalysis(farmerData.location, language);
      const weatherForecast = await getWeatherForecast(farmerData.location, language);
      const farmingAdvice = await getFarmingAdvice(farmerData, marketAnalysis, weatherForecast, language);

      setRecommendation({
        marketAnalysis,
        weatherForecast,
        farmingAdvice,
      });
      setStatus(AppStatus.SUCCESS);
    } catch (err) {
      console.error("An error occurred during the analysis:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred. Please try again.";
      setError(`Failed to generate farming plan. ${errorMessage}`);
      setStatus(AppStatus.ERROR);
    }
  }, [language]);

  const handleReset = () => {
    setStatus(AppStatus.IDLE);
    setRecommendation(null);
    setError(null);
  };

  return (
    <LocalizationContext.Provider value={localizationContextValue}>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
        <Header />
        <main className="container mx-auto p-4 md:p-8">
          {status === AppStatus.IDLE && <FarmerInputForm onSubmit={handleFormSubmit} isLoading={false} />}
          {status === AppStatus.LOADING && (
            <>
              <FarmerInputForm onSubmit={handleFormSubmit} isLoading={true} />
              <div className="mt-8">
                <Loader />
              </div>
            </>
          )}
          {status === AppStatus.ERROR && (
            <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">{t('errorTitle')}</h2>
              <p className="mb-6">{error}</p>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                {t('errorTryAgainButton')}
              </button>
            </div>
          )}
          {status === AppStatus.SUCCESS && recommendation && (
            <>
              <Dashboard recommendation={recommendation} />
              <div className="text-center mt-8">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-transform transform hover:scale-105"
                >
                  {t('newAnalysisButton')}
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </LocalizationContext.Provider>
  );
};

export default App;
