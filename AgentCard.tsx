import React from 'react';

interface AgentCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const AgentCard: React.FC<AgentCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="text-primary">{icon}</div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};