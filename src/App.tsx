
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, CheckSquare, Users, Calendar, Settings, Search, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1E293B] p-10 rounded-2xl border border-[#334155] max-w-md w-full shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-slate-400">This section is currently under development for the prototype.</p>
    </motion.div>
  </div>
);

function Sidebar() {
  const location = useLocation();
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart3 size={20} /> },
    { name: 'Tasks', path: '/tasks', icon: <CheckSquare size={20} /> },
    { name: 'Team', path: '/team', icon: <Users size={20} /> },
    { name: 'Calendar', path: '/calendar', icon: <Calendar size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#1E293B] border-r border-[#334155] flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-8 h-8 rounded bg-[#6366F1] flex items-center justify-center font-bold text-white">T</div>
        <span className="text-xl font-bold tracking-wide text-white">TeamPilot<span className="text-[#6366F1]">AI</span></span>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.name} to={item.path} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors duration-200 ${isActive ? 'bg-[#6366F1] text-white' : 'text-slate-400 hover:bg-[#334155] hover:text-white'}`}>
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header className="h-20 border-b border-[#334155] bg-[#0F172A] flex items-center justify-between px-8 ml-64 sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-semibold text-white">Welcome back, Alex 👋</h1>
        <p className="text-sm text-slate-400 mt-1">Here's what's happening with your team today.</p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search anything..." className="bg-[#1E293B] border border-[#334155] text-white text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-[#6366F1] w-64 transition-colors" />
        </div>
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#22C55E] flex items-center justify-center text-white font-bold cursor-pointer border-2 border-[#1E293B]">
          A
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#0F172A] font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-8 ml-64 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/tasks" element={<PlaceholderPage title="Tasks" />} />
              <Route path="/team" element={<PlaceholderPage title="Team" />} />
              <Route path="/calendar" element={<PlaceholderPage title="Calendar" />} />
              <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
