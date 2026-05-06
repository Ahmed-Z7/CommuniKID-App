import Link from "next/link";
import { Users, Search, Filter, Plus, TrendingUp, Calendar, ChevronRight } from "lucide-react";
import { db } from "@/lib/db";
import { patients, users } from "@/lib/db/schema";

export default async function PatientsList() {
  // Fetch real patients from DB if any, otherwise use mock
  const dbPatients = await db.select().from(patients);

  const displayPatients = dbPatients.length > 0 ? dbPatients : [
    { id: 1, name: "ياسين أحمد", condition: "طيف توحد", age: 6, progress: 68, lastSession: "2024-03-31" },
    { id: 2, name: "ليلى محمود", condition: "تأخر لغوي", age: 5, progress: 85, lastSession: "2024-03-30" },
    { id: 3, name: "عمر خالد", condition: "تأتأة", age: 7, progress: 45, lastSession: "2024-03-29" },
    { id: 4, name: "فاطمة علي", condition: "صعوبات تعلم", age: 6, progress: 92, lastSession: "2024-03-28" },
    { id: 5, name: "زين حسن", condition: "فرط حركة", age: 4, progress: 30, lastSession: "2024-03-27" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-10 font-bold transition-colors duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div className="space-y-2">
          <h1 className="text-5xl font-black text-slate-800 dark:text-white flex items-center gap-4 italic tracking-tight">
             قائمة الأبطال (المرضى) 👨‍👩‍👧‍👦
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">نتابع نموهم وتطورهم خطوة بخطوة بكل احترافية</p>
        </div>
        <button className="btn-premium px-12 py-6 flex items-center gap-3 text-xl shadow-glow-blue border-2 border-white/20">
          <Plus className="w-8 h-8" />
          إضافة حالة جديدة
        </button>
      </header>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { label: "إجمالي الحالات", value: "24", icon: Users, color: "text-blue", bg: "bg-blue/5" },
          { label: "جلسات اليوم", value: "8", icon: Calendar, color: "text-coral", bg: "bg-coral/5" },
          { label: "نسبة التحسن العام", value: "76%", icon: TrendingUp, color: "text-accent", bg: "bg-accent/5" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-10 rounded-[3.5rem] flex items-center gap-8 border-2 border-transparent hover:border-white transition-all shadow-xl">
            <div className={`w-20 h-20 rounded-3xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
              <stat.icon className="w-10 h-10" />
            </div>
            <div>
              <p className="text-slate-400 uppercase tracking-widest text-xs mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-slate-800 dark:text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex-1 relative group">
          <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="ابحث عن اسم المريض أو الحالة..."
            className="w-full bg-white dark:bg-slate-900/50 backdrop-blur-3xl border-2 border-transparent focus:border-primary/30 rounded-[2.5rem] py-6 pr-20 pl-8 text-xl outline-none shadow-soft transition-all placeholder:italic"
          />
        </div>
        <button className="glass-card px-10 rounded-[2.5rem] flex items-center gap-4 text-slate-500 hover:text-primary transition-all">
          <Filter className="w-6 h-6" />
          <span className="text-lg">تصفية النتائج</span>
        </button>
      </div>

      {/* Patient Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {displayPatients.map((p: any) => (
          <Link 
            key={p.id}
            href={`/therapist/patients/${p.id}`}
            className="glass-card p-10 rounded-[4rem] group hover:scale-[1.03] transition-all duration-500 flex items-center gap-10 border-2 border-transparent hover:border-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
            
            <div className="w-32 h-32 rounded-[3.5rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-6xl group-hover:rotate-12 transition-transform duration-500 shadow-inner">
               👦
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-1 group-hover:text-primary transition-colors">{p.name || "مريض جديد"}</h3>
                  <p className="text-slate-400 font-bold italic">{p.condition || "حالة عامة"} | {p.age || "?"} سنوات</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-black">التقدم</span>
                  <p className="text-2xl font-black text-primary">{p.progress || 0}%</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 group-hover:brightness-110" 
                  style={{ width: `${p.progress || 0}%` }} 
                />
              </div>

              <div className="flex items-center justify-between pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-slate-400 italic">اخر جلسة: {p.lastSession || "-"}</span>
                <span className="flex items-center gap-2 text-primary font-black">
                  عرض التفاصيل
                  <ChevronRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
