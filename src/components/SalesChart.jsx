import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const SalesChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-[450px] hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Revenue Analytics</h2>
          <p className="text-sm text-gray-500 mt-0.5">Monthly performance metrics</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-1.5 text-xs rounded-lg bg-indigo-600 text-white font-semibold transition hover:bg-indigo-700">Monthly</button>
          <button className="px-4 py-1.5 text-xs rounded-lg text-gray-500 font-medium hover:bg-gray-100 transition">Weekly</button>
        </div>
      </div>
      <div className="flex-1 w-full scale-animation">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              dx={-5}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: '#F9FAFB' }}
              contentStyle={{
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                padding: '12px',
                background: '#fff',
              }}
              labelStyle={{ fontWeight: '700', color: '#111827', marginBottom: '4px' }}
              itemStyle={{ color: '#4F46E5', fontWeight: '500' }}
            />
            <Bar
              dataKey="sales"
              radius={[4, 4, 0, 0]}
              barSize={30}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === data.length - 1 ? '#4F46E5' : '#C7D2FE'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
