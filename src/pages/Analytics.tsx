
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, FileText, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

const weeklyData = [
  { name: 'Mon', productivity: 85 },
  { name: 'Tue', productivity: 92 },
  { name: 'Wed', productivity: 88 },
  { name: 'Thu', productivity: 95 },
  { name: 'Fri', productivity: 90 },
];

const taskData = [
  { name: 'Completed', value: 56, color: '#22C55E' },
  { name: 'Pending', value: 42, color: '#F59E0B' },
  { name: 'Overdue', value: 14, color: '#EF4444' },
];

const departmentData = [
  { name: 'Design', progress: 92 },
  { name: 'Development', progress: 88 },
  { name: 'Testing', progress: 81 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E293B] border border-[#334155] p-3 rounded-lg shadow-xl">
        <p className="text-white font-medium">{label}</p>
        <p className="text-[#6366F1]">Score: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto pb-12"
    >
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Performance Analytics</h2>
          <p className="text-slate-400 mt-2">Detailed breakdown of team productivity and tasks.</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1E293B] hover:bg-[#334155] border border-[#334155] text-slate-300 rounded-lg transition-colors">
            <FileText size={18} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-lg transition-colors shadow-lg shadow-[#6366F1]/20">
            <Download size={18} />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Productivity Score */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155] flex flex-col items-center justify-center relative overflow-hidden"
        >
          <h3 className="text-lg font-semibold text-white w-full text-left mb-6">Overall Score</h3>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#0F172A" strokeWidth="10" />
              <motion.circle 
                cx="50" cy="50" r="45" fill="none" stroke="#6366F1" strokeWidth="10"
                strokeDasharray="283"
                initial={{ strokeDashoffset: 283 }}
                animate={{ strokeDashoffset: 283 - (283 * 0.92) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold text-white">92<span className="text-xl">%</span></span>
              <span className="text-xs text-[#22C55E] font-medium mt-1">Excellent</span>
            </div>
          </div>
        </motion.div>

        {/* Task Distribution */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Task Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            {taskData.map(item => (
              <div key={item.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-slate-400">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Weekly Summary */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-[#6366F1]/30 relative"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">AI Weekly Summary</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-xl border border-[#334155]">
              <div className="flex items-center space-x-3">
                <TrendingUp size={18} className="text-[#22C55E]" />
                <span className="text-sm font-medium text-slate-300">Productivity</span>
              </div>
              <span className="text-[#22C55E] font-bold">↑ 18%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-xl border border-[#334155]">
              <div className="flex items-center space-x-3">
                <TrendingUp size={18} className="text-[#22C55E]" />
                <span className="text-sm font-medium text-slate-300">Meeting Efficiency</span>
              </div>
              <span className="text-[#22C55E] font-bold">↑ 12%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0F172A] rounded-xl border border-[#EF4444]/30">
              <div className="flex items-start space-x-3">
                <AlertTriangle size={18} className="text-[#EF4444] mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-slate-300 block">Burnout Risk: High</span>
                  <span className="text-xs text-slate-400 mt-1 block">Development team may miss Sprint 4. Consider reallocating 2 tasks from Sarah.</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-2 py-2.5 bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/30 text-[#6366F1] text-sm font-medium rounded-xl transition-colors">
              Generate Detailed Report
            </button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Productivity Chart */}
        <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]">
          <h3 className="text-lg font-semibold text-white mb-6">Weekly Productivity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" tick={{ fill: '#94A3B8' }} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" tick={{ fill: '#94A3B8' }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.4 }} />
                <Bar dataKey="productivity" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Performance */}
        <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155]">
          <h3 className="text-lg font-semibold text-white mb-6">Department Performance</h3>
          <div className="space-y-8 mt-4">
            {departmentData.map((dept) => (
              <div key={dept.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-300">{dept.name}</span>
                  <span className="text-sm font-bold text-white">{dept.progress}%</span>
                </div>
                <div className="w-full bg-[#0F172A] rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${dept.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-2.5 rounded-full ${dept.progress > 90 ? 'bg-[#6366F1]' : dept.progress > 85 ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Forecast & Upcoming Deadlines */}
        <div className="lg:col-span-2 bg-gradient-to-r from-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-[#334155] mt-2">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="text-[#6366F1]" size={20} />
            <h3 className="text-lg font-semibold text-white">AI Forecast & Upcoming Deadlines</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0F172A] p-4 rounded-xl border border-[#334155]/50 hover:border-[#6366F1]/50 transition-colors">
              <div className="text-xs font-semibold text-[#F59E0B] mb-1">Due Tomorrow</div>
              <h4 className="text-white font-medium">Q3 Marketing Assets</h4>
              <p className="text-slate-400 text-sm mt-2 flex items-center justify-between">
                <span>Design Team</span>
                <span className="text-[#22C55E]">On Track</span>
              </p>
            </div>
            <div className="bg-[#0F172A] p-4 rounded-xl border border-[#334155]/50 hover:border-[#6366F1]/50 transition-colors">
              <div className="text-xs font-semibold text-[#EF4444] mb-1">Due in 3 Days</div>
              <h4 className="text-white font-medium">Sprint 4 Code Freeze</h4>
              <p className="text-slate-400 text-sm mt-2 flex items-center justify-between">
                <span>Dev Team</span>
                <span className="text-[#EF4444]">At Risk</span>
              </p>
            </div>
            <div className="bg-[#0F172A] p-4 rounded-xl border border-[#334155]/50 hover:border-[#6366F1]/50 transition-colors">
              <div className="text-xs font-semibold text-[#6366F1] mb-1">AI Prediction</div>
              <h4 className="text-white font-medium">Early Completion</h4>
              <p className="text-slate-400 text-sm mt-2">
                User Testing phase will likely finish 2 days early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
