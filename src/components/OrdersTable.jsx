import React, { useState } from 'react';
import { ChevronDown, Filter, MoreHorizontal, ArrowRight, Eye, Trash2, Edit, Download } from 'lucide-react';
import Papa from 'papaparse';

const OrdersTable = ({ orders }) => {
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-50 text-green-700 border border-green-100 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider';
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-100 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider';
      case 'Cancelled':
        return 'bg-red-50 text-red-700 border border-red-100 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-100 px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider';
    }
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(filteredOrders);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `orders_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 md:p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recent Transactions</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Global order status updates</p>
        </div>
        <div className="flex flex-row items-center space-x-2 md:space-x-3 w-full sm:w-auto">
          <button
            onClick={handleExportCSV}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs md:text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition active:scale-95 group"
          >
            <Download className="h-4 w-4" />
            <span className="hidden xs:inline">Export</span>
            <span className="xs:hidden">CSV</span>
          </button>
          
          <div className="relative flex-1 sm:flex-none">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between space-x-2 px-4 py-2 border border-gray-200 rounded-xl text-xs md:text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all outline-none"
            >
              <div className="flex items-center space-x-2 truncate">
                <Filter className={`h-4 w-4 shrink-0 transition-colors ${filter !== 'All' ? 'text-indigo-600' : 'text-gray-400'}`} />
                <span className="truncate">{filter}</span>
              </div>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          
            {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {['All', 'Completed', 'Pending', 'Cancelled'].map((status) => (
                        <button
                            key={status}
                            onClick={() => {
                                setFilter(status);
                                setIsFilterOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${
                                filter === status ? 'text-indigo-600 font-bold bg-indigo-50/30' : 'text-gray-600'
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            )}
           </div>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/50">
            <tr>
              <th className="px-4 md:px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50/50 z-10 backdrop-blur-sm">ID</th>
              <th className="px-4 md:px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
              <th className="px-4 md:px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
              <th className="px-4 md:px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
              <th className="px-4 md:px-6 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
              <th className="px-4 md:px-6 py-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Edit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-50 transition-all duration-300">
            {filteredOrders.length > 0 ? filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-indigo-50/10 transition-colors group">
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-bold text-indigo-600 sticky left-0 bg-white group-hover:bg-indigo-50/10 transition-colors z-10">{order.id}</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500 mr-3 border border-white shadow-sm ring-1 ring-gray-100">
                      {order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-900 leading-none">{order.customer}</span>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-center">
                  <span className={getStatusClasses(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-[10px] md:text-xs font-bold text-gray-400">{order.date}</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm font-black text-gray-950">{order.amount}</td>
                <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm">
                   <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors bg-gray-50/50 rounded-lg"><MoreHorizontal className="h-4 w-4" /></button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-sm font-medium text-gray-400 italic">No matching orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 md:p-6 border-t border-gray-100 bg-white flex items-center justify-between">
        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Total: {filteredOrders.length}</p>
        <button className="text-[10px] md:text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center group transition-all uppercase tracking-widest">
          Reports <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
