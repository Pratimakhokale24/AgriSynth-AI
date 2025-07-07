
import React from 'react';
import { LeafIcon } from './icons';
import { useLocalization } from '../App';
import { languages, Language } from '../types';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLocalization();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <header className="bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LeafIcon className="h-8 w-8 text-white" />
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {t('headerTitle')}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-green-100 hidden md:block">{t('headerSubtitle')}</p>
          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="custom-arrow bg-green-600 text-white border border-green-400 rounded-md py-1 pl-2 pr-8 text-sm focus:ring-2 focus:ring-white focus:outline-none"
            >
              {(Object.keys(languages) as Language[]).map(lang => (
                <option key={lang} value={lang} className="bg-white text-gray-900 font-semibold">
                  {languages[lang].nativeName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
