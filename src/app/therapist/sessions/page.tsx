import { Calendar as CalendarIcon, Clock, Users, Plus, ChevronLeft, ChevronRight, Video, MapPin, Search } from "lucide-react";

export default function SessionPlannerPage() {
  const sessions = [
    { id: 1, patient: "ياسين أحمد", time: "10:00 AM", type: "حضوري", status: "قادم", icon: "👦", color: "text-blue", bg: "bg-blue/10" },
    { id: 2, patient: "ليلى محمود", time: "11:30 AM", type: "أونلاين", status: "قيد الانتظار", icon: "👧", color: "text-coral", bg: "bg-coral/10" },
    { id: 3, patient: "عمر خالد", time: "02:00 PM", type: "حضوري", status: "ملغى", icon: "👦", color: "text-slate-400", bg: "bg-slate-100" },
    { id: 4, patient: "فاطمة علي", time: "03:30 PM", type: "أونلاين", status: "قادم", icon: "👧", color: "text-accent", bg: "bg-accent/10" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-10 font-bold transition-colors duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black text-slate-800 dark:text-white flex items-center gap-4 italic tracking-tight">
             مخطط الجلسات الذكي 📅
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-2">نظم وقتك، تابع مرضاك، وكن مستعداً لكل تحدي جديد</p>
        </div>
        <button className="btn-premium px-12 py-6 flex items-center gap-3 text-xl shadow-glow-blue">
          <Plus className="w-8 h-8" />
          حجز جلسة جديدة
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Calendar Sidebar Grid */}
        <div className="lg:col-span-1 space-y-10">
          <div className="glass-card p-8 rounded-[4rem] border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black italic">مارس 2024</h3>
              <div className="flex gap-2">
                <ChevronLeft className="w-6 h-6 text-slate-300 cursor-pointer" />
                <ChevronRight className="w-6 h-6 text-slate-300 cursor-pointer" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs mb-4 text-slate-400 font-black">
              <span>ح</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span><span>س</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {[...Array(31)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${i+1 === 31 ? "bg-primary text-white shadow-glow-blue" : "hover:bg-slate-50 dark:hover:bg-white/5"}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-[3rem] border border-white/20 shadow-xl space-y-6">
             <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest pl-2">فئات الجلسات</h4>
             <div className="space-y-4">
               <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-4 h-4 rounded-full bg-blue shadow-glow-blue" />
                 <span className="text-slate-600 dark:text-white font-black group-hover:text-blue transition-colors">جلسات حضورية</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-4 h-4 rounded-full bg-coral shadow-glow-coral" />
                 <span className="text-slate-600 dark:text-white font-black group-hover:text-coral transition-colors">جلسات أونلاين</span>
               </div>
             </div>
          </div>
        </div>

        {/* Main Schedule Grid */}
        <div className="lg:col-span-3 space-y-10">
           <div className="flex items-center justify-between px-4">
              <h2 className="text-3xl font-black italic">جدول أعمال اليوم ✨</h2>
              <div className="flex gap-4">
                <div className="relative group">
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input type="text" placeholder="بحث سريع..." className="bg-white/50 dark:bg-slate-900/50 rounded-2xl py-4 pr-14 pl-6 outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-white/20" />
                </div>
              </div>
           </div>

           <div className="space-y-6">
              {sessions.map((session) => (
                <div key={session.id} className="glass-card p-10 rounded-[4rem] group hover:scale-[1.02] transition-all flex items-center gap-10 border border-transparent hover:border-white shadow-2xl relative overflow-hidden">
                   <div className="w-24 h-24 rounded-[3rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-4xl shadow-inner group-hover:rotate-12 transition-transform duration-500">
                     {session.icon}
                   </div>
                   
                   <div className="flex-1 space-y-2">
                     <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-3xl font-black text-slate-800 dark:text-white">{session.patient}</h4>
                          <div className="flex items-center gap-4 text-slate-400 italic">
                             <span className="flex items-center gap-2">
                               <Clock className="w-5 h-5 text-primary" />
                               {session.time}
                             </span>
                             <span className="flex items-center gap-2">
                               {session.type === "أونلاين" ? <Video className="w-5 h-5 text-coral" /> : <MapPin className="w-5 h-5 text-blue" />}
                               {session.type}
                             </span>
                          </div>
                        </div>
                        <div className={`px-8 py-3 rounded-2xl font-black ${session.bg} ${session.color} shadow-sm`}>
                          {session.status}
                        </div>
                     </div>
                   </div>

                   <button className="p-6 bg-slate-950 text-white rounded-3xl font-black hover:bg-black transition-all shadow-2xl">
                      بدء الجلسة ⚡️
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
