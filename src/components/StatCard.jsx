import React from 'react';

const StatCard = ({ title, value, change, isIncrease, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 group relative overflow-hidden">
      {/* Decorative Background Icon */}
      {Icon && (
        <div className="absolute -right-4 -bottom-4 h-24 w-24 text-gray-50 group-hover:text-indigo-50/50 transition-colors duration-500 pointer-events-none">
            <Icon size={96} strokeWidth={1} />
        </div>
      )}

      <div className="flex items-start justify-between relative z-10">
        <div>
          <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{title}</h3>
          <p className="text-xl md:text-2xl font-black text-gray-950 mt-2 tracking-tight">{value}</p>
        </div>
        {Icon && (
          <div className="h-10 w-10 md:h-12 md:w-12 bg-indigo-50/50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm shadow-indigo-100">
            <Icon size={20} className="md:w-6 md:h-6" />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center space-x-2 relative z-10">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
            isIncrease
              ? 'bg-green-50 text-green-700 border-green-100'
              : 'bg-red-50 text-red-700 border-red-100'
          }`}
        >
          {isIncrease ? '▲' : '▼'} {change}
        </span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Since last month</span>
      </div>
    </div>
  );
};

export default StatCard;
