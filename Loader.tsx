
import React from 'react';
import { LeafIcon } from './icons';
import { useLocalization } from '../App';

export const Loader: React.FC = () => {
  const { t } = useLocalization();
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 bg-white rounded-lg shadow-md">
        <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 border-4 border-secondary-light rounded-full animate-spin border-t-transparent"></div>
            <LeafIcon className="h-8 w-8 text-secondary animate-pulse" />
        </div>
      <p className="text-lg font-semibold text-gray-700">{t('loaderTitle')}</p>
      <p className="text-sm text-gray-600 text-center">{t('loaderSubtitle')}</p>
    </div>
  );
};
