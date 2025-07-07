import React, { useState } from 'react';
import { FarmerData } from '../types';
import { useLocalization } from '../App';

interface FarmerInputFormProps {
  onSubmit: (data: FarmerData) => void;
  isLoading: boolean;
}

export const FarmerInputForm: React.FC<FarmerInputFormProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLocalization();
  const [formData, setFormData] = useState<FarmerData>({
    location: '',
    landSize: 10,
    soilType: 'Loam',
    financialGoal: 'Maximize Profit',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'landSize' ? Number(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const soilTypeOptions = [
    { value: "Clay", labelKey: "soilTypeClay" },
    { value: "Sandy", labelKey: "soilTypeSandy" },
    { value: "Silt", labelKey: "soilTypeSilt" },
    { value: "Loam", labelKey: "soilTypeLoam" },
    { value: "Peat", labelKey: "soilTypePeat" },
    { value: "Chalky", labelKey: "soilTypeChalky" },
  ];

  const financialGoalOptions = [
    { value: "Maximize Profit", labelKey: "financialGoalProfit" },
    { value: "Minimize Risk", labelKey: "financialGoalRisk" },
    { value: "Balance Profit and Sustainability", labelKey: "financialGoalBalance" },
    { value: "Experimental/Hobby", labelKey: "financialGoalHobby" },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('formTitle')}</h2>
      <p className="text-gray-600 mb-6">{t('formSubtitle')}</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            {t('locationLabel')}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder={t('locationPlaceholder')}
            required
            disabled={isLoading}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="landSize" className="block text-sm font-medium text-gray-700 mb-1">
            {t('landSizeLabel')}
          </label>
          <input
            type="number"
            id="landSize"
            name="landSize"
            value={formData.landSize}
            onChange={handleChange}
            min="1"
            required
            disabled={isLoading}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">
            {t('soilTypeLabel')}
          </label>
          <select
            id="soilType"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="custom-arrow w-full px-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 text-gray-900"
          >
            {soilTypeOptions.map(opt => <option key={opt.value} value={opt.value} className="bg-white text-gray-900">{t(opt.labelKey)}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="financialGoal" className="block text-sm font-medium text-gray-700 mb-1">
            {t('financialGoalLabel')}
          </label>
          <select
            id="financialGoal"
            name="financialGoal"
            value={formData.financialGoal}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="custom-arrow w-full px-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:bg-gray-100 text-gray-900"
          >
            {financialGoalOptions.map(opt => <option key={opt.value} value={opt.value} className="bg-white text-gray-900">{t(opt.labelKey)}</option>)}
          </select>
        </div>
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isLoading ? t('submitButtonLoading') : t('submitButton')}
          </button>
        </div>
      </form>
    </div>
  );
};