import React from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  PieChart,
  LogOut,
  HelpCircle,
  X,
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, isActive, collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item flex items-center w-full transition-all duration-200 relative group truncate px-4 py-3 rounded-xl overflow-hidden mb-1 ${
        isActive 
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 font-medium'
      }`}
    >
      <Icon className={`h-5 w-5 shrink-0 transition-transform ${collapsed ? 'md:mx-auto' : 'mr-3'} ${isActive ? 'scale-110' : ''}`} />
      <span className={`text-sm font-semibold whitespace-nowrap transition-opacity ${collapsed ? 'md:hidden opacity-0' : 'opacity-100'}`}>
        {label}
      </span>
      {collapsed && (
        <div className="hidden md:block absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none uppercase tracking-widest translate-x-2 group-hover:translate-x-0">
          {label}
        </div>
      )}
    </button>
  );
};

const Sidebar = ({ currentTab, onTabChange, isOpen, onClose }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      <aside
        className={`sidebar fixed inset-y-0 left-0 h-full border-r border-gray-200 bg-white transition-all duration-300 ease-in-out z-[100] flex flex-col shadow-xl md:shadow-sm ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${collapsed ? 'md:w-24' : 'md:w-72'} w-72`}
      >
        {/* Brand Section */}
        <div className={`p-6 md:p-8 mb-4 flex items-center justify-between`}>
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="h-10 w-10 min-w-[40px] bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <span className="font-black text-xl italic">A</span>
            </div>
            <div className={`flex flex-col transition-opacity ${collapsed ? 'md:opacity-0 md:hidden' : 'opacity-100'}`}>
                <span className="text-xl font-bold text-gray-900 tracking-tight">Dashboard</span>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 md:hidden">
            <X className="h-6 w-6" />
          </button>

          {/* Collapse button for desktop */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-white border border-gray-200 rounded-full shadow-md items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-100 transition-all z-[110] group"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className={`flex-grow space-y-1 mt-4 px-6 ${collapsed ? 'md:px-4' : 'md:px-6'}`}>
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              {...item}
              isActive={currentTab === item.id}
              collapsed={collapsed}
              onClick={() => {
                onTabChange(item.id);
                if(window.innerWidth < 768) onClose();
              }}
            />
          ))}
        </nav>

        {/* Footer Section */}
        <div className={`mt-auto p-6 mb-4 space-y-2 ${collapsed ? 'md:px-4' : 'md:px-6'}`}>
          <div className="h-px bg-gray-100 w-full mb-6"></div>
          <SidebarItem icon={Settings} label="Settings" collapsed={collapsed} />
          <SidebarItem icon={HelpCircle} label="Help Center" collapsed={collapsed} />
          <button className={`w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-semibold text-sm transition-all group ${collapsed ? 'md:justify-center' : ''}`}>
             <LogOut className={`h-5 w-5 shrink-0 ${collapsed ? 'md:mr-0' : 'mr-3'}`} />
             <span className={`${collapsed ? 'md:hidden' : 'inline'}`}>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
