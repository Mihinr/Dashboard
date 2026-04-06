import React from 'react';
import { User, Bell, Search, Menu, Plus, LayoutGrid, Settings } from 'lucide-react';

const Header = ({ onMenuOpen }) => {
  return (
    <header className="sticky top-0 z-[60] bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3 md:space-x-6">
        <button 
          onClick={onMenuOpen} 
          className="p-2 -ml-2 text-gray-500 hover:text-indigo-600 transition-colors md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400">
             <span className="hover:text-indigo-600 transition-colors cursor-pointer hidden sm:inline">Main</span>
             <span className="text-gray-200 hidden sm:inline">/</span>
             <span className="text-indigo-600">Overview</span>
        </div>
        
        <div className="hidden xl:flex relative ml-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-64 pl-10 pr-3 py-2 border border-gray-100 bg-gray-50/50 rounded-xl text-xs font-bold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Search Intelligence..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Quick Actions */}
        <button className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
          <Plus size={14} />
          <span>Entry</span>
        </button>

        <div className="h-4 w-px bg-gray-200 mx-2 hidden sm:block"></div>

        <button className="text-gray-400 hover:text-gray-600 transition p-2">
            <LayoutGrid size={20} />
        </button>

        <button className="text-gray-400 hover:text-gray-600 transition relative p-2">
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center space-x-3 md:pl-4 md:border-l md:border-gray-100 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-gray-950 uppercase tracking-tighter leading-none">John Doe</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Global Admin</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-indigo-600 border-2 border-white shadow-lg shadow-indigo-100 flex items-center justify-center text-white group-hover:scale-105 transition-all font-black text-sm relative">
                JD
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
