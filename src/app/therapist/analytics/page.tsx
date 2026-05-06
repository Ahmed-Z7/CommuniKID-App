import { BarChart3, TrendingUp, Users, Activity, PieChart, Target, Zap } from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    { label: "معدل النجاح اليومي", value: "85%", change: "+12%", icon: Zap, color: "text-accent", bg: "bg-accent/10" },
    { label: "معدل التفاعل", value: "92%", change: "+5%", icon: Activity, color: "text-blue", bg: "bg-blue/10" },
    { label: "الأداء الأسبوعي", value: "78%", change: "-2%", icon: BarChart3, color: "text-coral", bg: "bg-coral/10" },
    { label: "تحقيق الأهداف", value: "64%", change: "+18%", icon: Target, color: "text-sage", bg: "bg-sage/10" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-10 font-bold transition-colors duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black text-slate-800 dark:text-white flex items-center gap-4 italic tracking-tight">
             مركز تحليل البيانات 📊
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-2">نحول الملاحظات إلى رؤى ذكية تدعم قرارك الطبي</p>
        </div>
        <div className="flex gap-4">
          <button className="glass-card px-8 py-4 rounded-2xl flex items-center gap-3 text-slate-500 hover:text-primary transition-all shadow-xl">
             تصدير البيانات 📥
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-10 rounded-[4rem] group hover:scale-[1.05] transition-all duration-500 shadow-2xl relative overflow-hidden border border-white/20">
            <div className={`w-20 h-20 rounded-3xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
              <stat.icon className="w-10 h-10" />
            </div>
            <p className="text-4xl font-black text-slate-800 dark:text-white mb-2">{stat.value}</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">{stat.label}</p>
            <span className={`text-sm font-black ${stat.change.startsWith("+") ? "text-accent" : "text-coral"}`}>
              {stat.change} مقارنة بالأسبوع الماضي
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Mock Chart Area 1 */}
         <div className="glass-card p-12 rounded-[5rem] shadow-2xl border border-white/20 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black text-slate-800 dark:text-white italic">تطور نطق الكلمات</h3>
              <PieChart className="w-8 h-8 text-blue" />
            </div>
            <div className="h-[300px] flex items-end gap-6 pb-4">
              {[40, 65, 45, 90, 75, 55, 80].map((h, i) => (
                <div key={i} className="flex-1 transition-all group relative">
                   <div 
                     className="w-full bg-gradient-to-t from-primary/40 to-primary rounded-2xl group-hover:brightness-125 transition-all shadow-glow-blue" 
                     style={{ height: `${h}%` }}
                   />
                   <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs text-slate-400">يوم {i+1}</span>
                </div>
              ))}
            </div>
         </div>

         {/* Mock Chart Area 2 */}
         <div className="glass-card p-12 rounded-[5rem] shadow-2xl border border-white/20 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-black text-slate-800 dark:text-white italic">توزيع الحالات</h3>
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-6">
              {[
                { label: "طيف توحد", value: 65, color: "bg-blue" },
                { label: "تأخر لغوي", value: 45, color: "bg-coral" },
                { label: "صعوبة تعلم", value: 30, color: "bg-sage" },
                { label: "تأتأة", value: 20, color: "bg-peach" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-800 dark:text-white">{item.label}</span>
                    <span className="text-slate-400">{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}
