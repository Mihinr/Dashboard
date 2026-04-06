import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import OrdersTable from '../components/OrdersTable';
import GeospatialMap from '../components/GeospatialMap';
import { StatCardSkeleton, ChartSkeleton, TableSkeleton } from '../components/Skeleton';
import { statsData, salesData, recentOrders } from '../data/dummyData';

// Icons for Stat Cards - Feature: Icon Support
import { DollarSign, ShoppingBag, Users, MoveUpRight, MoreVertical } from 'lucide-react';

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('30 Days');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const timeFilters = ['Today', '7 Days', '30 Days', '1 Year'];

  // Manually Mapping Icons to Dummy Data - Feature: Icon integration
  const getIcon = (title) => {
    switch (title) {
      case 'Total Revenue': return DollarSign;
      case 'Total Orders': return ShoppingBag;
      case 'Total Customers': return Users;
      default: return DollarSign;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 antialiased font-sans overflow-x-hidden">
      <Sidebar 
        currentTab={currentTab} 
        onTabChange={setCurrentTab} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 transition-all duration-300 md:pl-72 focus:outline-none">
        <Header onMenuOpen={() => setSidebarOpen(true)} />
        
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 space-y-6 md:space-y-8 animate-in fade-in duration-500 overflow-x-hidden">
          
          <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-6">
            <div>
                 <h2 className="text-xl md:text-2xl font-black text-gray-950 uppercase tracking-tighter">Executive Intelligence</h2>
                 <p className="text-[10px] md:text-xs font-bold text-blue-600/60 uppercase tracking-[0.2em] mt-0.5">Real-time analytical performance tracking</p>
            </div>
            
            <div className="w-full md:w-auto overflow-x-auto custom-scrollbar-hide -mx-4 px-4 pb-2 md:pb-0">
                <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm ring-1 ring-black/5 whitespace-nowrap min-w-max">
                    {timeFilters.map((range) => (
                        <button
                            key={range}
                            onClick={() => {
                                setLoading(true);
                                setDateRange(range);
                                setTimeout(() => setLoading(false), 800);
                            }}
                            className={`px-4 md:px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                                dateRange === range 
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                                : 'text-gray-400 hover:text-gray-950'
                            }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {loading ? (
                <>
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                </>
            ) : (
                statsData.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        isIncrease={stat.isIncrease}
                        icon={getIcon(stat.title)}
                    />
                ))
            )}
          </section>

          <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            <div className={loading ? "" : "h-[450px]"}>
                {loading ? <ChartSkeleton /> : <SalesChart data={salesData} />}
            </div>
            <div className={loading ? "" : "h-[450px]"}>
                {loading ? <ChartSkeleton /> : <GeospatialMap />}
            </div>
          </section>

          <section className="pb-12">
            {loading ? <TableSkeleton /> : <OrdersTable orders={recentOrders} />}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
