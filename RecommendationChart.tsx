import React from 'react';
import { MarketReport } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RecommendationChartProps {
  data: MarketReport[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-md shadow-lg">
        <p className="font-bold text-gray-800">{`${label}`}</p>
        <p className="text-sm text-primary">{`Price: ${data.pricePerUnit}`}</p>
        <p className="text-sm text-blue-600">{`Demand: ${data.demand}`}</p>
        <p className="text-xs text-gray-500 mt-2">{data.justification}</p>
      </div>
    );
  }
  return null;
};


export const RecommendationChart: React.FC<RecommendationChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    ...item,
    demandValue: item.demand === 'High' ? 3 : item.demand === 'Medium' ? 2 : 1,
  }));
  
  return (
    <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
            <BarChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 10,
                    left: -20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="cropName" tick={{ fontSize: 12 }} />
                <YAxis
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Demand Level', angle: -90, position: 'insideLeft', offset: 10, style: { fontSize: 12 } }}
                    domain={[0, 3]}
                    ticks={[1, 2, 3]}
                    tickFormatter={(value) => {
                        if (value === 1) return 'Low';
                        if (value === 2) return 'Mid';
                        if (value === 3) return 'High';
                        return '';
                    }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="demandValue" name="Demand Level" fill="#3B82F6" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};