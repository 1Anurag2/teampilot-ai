
import { motion } from 'framer-motion';
import { Users, CheckCircle2, Clock, CalendarDays, Sparkles, ArrowRight, Activity, MessageSquare } from 'lucide-react';

const StatCard = ({ title, value, icon, trend, trendUp }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-[#1E293B] p-6 rounded-2xl border border-[#334155] shadow-sm flex flex-col justify-between"
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-400 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
      </div>
      <div className="p-3 bg-[#0F172A] rounded-xl text-[#6366F1]">
        {icon}
      </div>
    </div>
    {trend && (
      <div className={`mt-4 flex items-center text-sm font-medium ${trendUp ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
        <span>{trendUp ? '↑' : '↓'} {trend}</span>
        <span className="text-slate-500 ml-2 font-normal">vs last week</span>
      </div>
    )}
  </motion.div>
);

const AICard = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-[1px] rounded-2xl mb-8 relative overflow-hidden group"
  >
    <motion.div 
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-transparent blur-xl"
    />
    <div className="bg-[#1E293B] rounded-2xl p-6 relative z-10 border border-[#6366F1]/30">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">
            <Sparkles size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center">
              AI Assistant
              <span className="ml-3 px-2 py-1 text-xs font-semibold bg-[#6366F1]/20 text-[#6366F1] rounded-full">Suggested Action</span>
            </h3>
            <p className="text-slate-300 mt-2 text-lg mb-4">
              <span className="font-semibold text-white">Sarah</span> is currently overloaded with 8 pending tasks. 
              Move <span className="font-semibold text-white">UI Review</span> to <span className="font-semibold text-white">Rahul</span> to optimize sprint delivery.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#10B981]/10 rounded-lg border border-[#10B981]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                <span className="text-xs text-[#10B981] font-medium">96% Confidence</span>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#F59E0B]/10 rounded-lg border border-[#F59E0B]/20">
                <span className="text-xs text-[#F59E0B] font-medium">Saves ~4 Hrs</span>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#EF4444]/10 rounded-lg border border-[#EF4444]/20">
                <span className="text-xs text-[#EF4444] font-medium">High Priority</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="px-6 py-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-medium rounded-xl transition-colors shadow-lg shadow-[#6366F1]/20 flex items-center justify-center space-x-2">
            <span>Accept</span>
            <CheckCircle2 size={18} />
          </button>
          <button className="px-6 py-2 bg-[#334155] hover:bg-[#475569] text-slate-300 font-medium rounded-xl transition-colors">
            Ignore
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const TeamMember = ({ name, role, status, initials, color }: any) => (
  <div className="flex items-center justify-between p-4 hover:bg-[#334155]/50 rounded-xl transition-colors cursor-pointer group">
    <div className="flex items-center space-x-4">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold relative`}>
        {initials}
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1E293B] ${status === 'online' ? 'bg-[#22C55E]' : status === 'busy' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'}`}></span>
      </div>
      <div>
        <h4 className="text-white font-medium group-hover:text-[#6366F1] transition-colors">{name}</h4>
        <p className="text-slate-400 text-sm">{role}</p>
      </div>
    </div>
    <button className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-[#334155]">
      <MessageSquare size={18} />
    </button>
  </div>
);

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto pb-12"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Team Members" value="128" icon={<Users size={24} />} trend="+12%" trendUp={true} />
        <StatCard title="Completed Tasks" value="56" icon={<CheckCircle2 size={24} />} trend="+8%" trendUp={true} />
        <StatCard title="Pending Tasks" value="42" icon={<Clock size={24} />} trend="-3%" trendUp={false} />
        <StatCard title="Meetings Today" value="6" icon={<CalendarDays size={24} />} />
      </div>

      {/* AI Assistant */}
      <AICard />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-1 bg-[#1E293B] border border-[#334155] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
            <CalendarDays className="mr-2 text-[#6366F1]" size={20} />
            Today's Meetings
          </h3>
          <div className="space-y-6">
            {[
              { time: '10:00 AM', title: 'Design Review', type: 'Zoom' },
              { time: '11:30 AM', title: 'Sprint Planning', type: 'Meet' },
              { time: '04:00 PM', title: 'Client Sync', type: 'Teams' }
            ].map((meeting, i) => (
              <div key={i} className="flex space-x-4">
                <div className="text-sm font-medium text-slate-400 w-16 pt-1">{meeting.time}</div>
                <div className="flex-1 bg-[#0F172A] p-4 rounded-xl border-l-2 border-[#6366F1] hover:bg-[#334155]/30 transition-colors">
                  <h4 className="text-white font-medium">{meeting.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{meeting.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Status */}
        <div className="lg:col-span-1 bg-[#1E293B] border border-[#334155] rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Users className="mr-2 text-[#6366F1]" size={20} />
              Team Status
            </h3>
            <button className="text-sm text-[#6366F1] hover:text-white transition-colors">View All</button>
          </div>
          <div className="space-y-2">
            <TeamMember name="Rahul Singh" role="UI Designer" status="online" initials="RS" color="bg-gradient-to-br from-purple-500 to-indigo-500" />
            <TeamMember name="Priya Sharma" role="Frontend Dev" status="busy" initials="PS" color="bg-gradient-to-br from-blue-500 to-cyan-500" />
            <TeamMember name="Aman Gupta" role="Backend Dev" status="offline" initials="AG" color="bg-gradient-to-br from-emerald-500 to-teal-500" />
            <TeamMember name="Neha Verma" role="Product Manager" status="online" initials="NV" color="bg-gradient-to-br from-rose-500 to-pink-500" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1 bg-[#1E293B] border border-[#334155] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
            <Activity className="mr-2 text-[#6366F1]" size={20} />
            Recent Activity
          </h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {[
              { time: '10 mins ago', desc: 'Rahul completed UI Review', icon: <CheckCircle2 size={14} className="text-[#22C55E]" /> },
              { time: '1 hour ago', desc: 'Neha joined the meeting', icon: <Users size={14} className="text-[#6366F1]" /> },
              { time: '2 hours ago', desc: 'Aman uploaded Q3 Report', icon: <ArrowRight size={14} className="text-[#F59E0B]" /> }
            ].map((act, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 bg-[#1E293B] text-slate-500 group-[.is-active]:text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {act.icon}
                </div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl bg-[#0F172A] border border-[#334155]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-slate-300 text-sm">{act.desc}</div>
                  </div>
                  <div className="text-xs text-slate-500">{act.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
