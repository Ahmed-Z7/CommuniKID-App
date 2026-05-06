import Link from "next/link";
import { 
  Users, 
  BarChart3, 
  Calendar, 
  FileText, 
  Search, 
  Bell, 
  Settings, 
  Plus, 
  ChevronRight, 
  Target,
  Zap,
  Activity,
  Heart
} from "lucide-react";

export default function TherapistDashboard() {
  const patients = [
    { id: 1, name: "ياسين أحمد", progress: 65, status: "نشط ⚡️", gender: "male", condition: "طيف توحد" },
    { id: 2, name: "ليلى محمود", progress: 42, status: "نشط ⚡️", gender: "female", condition: "تأخر لغوي" },
    { id: 3, name: "عمر خالد", progress: 88, status: "مكتمل ✅", gender: "male", condition: "صعوبة نطق" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg flex transition-colors duration-1000 font-bold overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[120px] animate-blob delay-2000 pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-80 glass-card m-6 rounded-[3.5rem] p-10 hidden lg:flex flex-col gap-12 shadow-2xl border-2 border-white/20 dark:border-white/5 z-20 sticky top-6 h-[calc(100vh-3rem)]">
        <div className="flex items-center gap-4 px-2">
           <div className="w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl shadow-glow-blue border border-white/20">🧩</div>
           <div className="text-2xl font-black text-slate-800 dark:text-white italic tracking-tighter uppercase">كوم-أون</div>
        </div>
        
        <nav className="flex flex-col gap-4">
          {[
            { href: "/therapist/dashboard", icon: Zap, label: "الرئيسية", active: true },
            { href: "/therapist/patients", icon: Users, label: "الأبطال (المرضى)" },
            { href: "/therapist/reports", icon: FileText, label: "التقارير" },
            { href: "/therapist/analytics", icon: BarChart3, label: "التحليلات" },
            { href: "/therapist/sessions", icon: Calendar, label: "الجلسات" },
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`p-6 rounded-[2rem] font-black flex items-center gap-4 transition-all group ${item.active ? "bg-primary text-white shadow-glow-blue" : "text-slate-500 hover:bg-white/10 dark:hover:bg-white/5"}`}
            >
              <item.icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${item.active ? "text-white" : "text-slate-400"}`} />
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-8 bg-slate-900/5 dark:bg-white/5 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-4 relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-3xl shadow-inner group-hover:rotate-12 transition-transform duration-500">👨‍⚕️</div>
            <div>
              <p className="text-lg font-black text-slate-800 dark:text-white">د. أحمد</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">خبير تخاطب</p>
            </div>
          </div>
          <button className="w-full mt-6 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-500 hover:text-red-400 transition-all text-sm font-black italic flex items-center justify-center gap-2">
             تسجيل الخروج 🚪
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 lg:p-14 overflow-auto z-10 animate-in fade-in duration-1000">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-800 dark:text-white italic tracking-tight">لوحة القدوة 🏆 ✨</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xl">أهلاً د. محمد! جاهز لنصنع الفرق في حياة الأبطال؟ 🚀</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 relative cursor-pointer hover:scale-110 transition-transform">
               <Bell className="w-7 h-7 text-primary" />
               <span className="absolute top-4 right-4 w-4 h-4 bg-red-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <button className="btn-premium px-10 py-6 text-xl flex items-center gap-3 shadow-glow-blue border-2 border-white/30">
               <Plus className="w-8 h-8" />
               إضافة بطل جديد
            </button>
          </div>
        </header>

        {/* Search Bar - Quick Action */}
        <div className="relative mb-16 group max-w-4xl">
           <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors w-6 h-6" />
           <input 
             type="text" 
             placeholder="ابحث عن اسم مريض، حالة، أو تاريخ..."
             className="w-full bg-white dark:bg-slate-900/50 backdrop-blur-3xl border-2 border-transparent focus:border-primary/30 rounded-[3rem] py-8 pr-20 pl-8 text-xl outline-none shadow-soft transition-all placeholder:italic"
           />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[
            { label: "إجمالي الأبطال", value: "12", sub: "مريض", icon: Users, color: "text-blue", bg: "bg-blue/10", border: "border-blue/20" },
            { label: "متوسط التقدم", value: "72%", sub: "سنوي", icon: Target, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
            { label: "كروت منتهية", value: "245", sub: "كارت", icon: Zap, color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20" },
          ].map((stat, i) => (
            <div key={i} className={`glass-card p-10 rounded-[4rem] group hover:scale-[1.05] transition-all duration-500 shadow-2xl relative overflow-hidden border ${stat.border}`}>
              <div className={`w-20 h-20 rounded-3xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <p className="text-5xl font-black text-slate-800 dark:text-white mb-2">{stat.value}</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black italic">{stat.label}</p>
              <span className="absolute top-10 left-10 text-4xl opacity-5">✨</span>
            </div>
          ))}
        </div>

        {/* Patient Table Area */}
        <section className="glass-card rounded-[5rem] p-12 lg:p-16 border border-white/20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
           
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="flex items-center gap-4">
                 <Activity className="w-8 h-8 text-primary" />
                 <h3 className="text-3xl font-black text-slate-800 dark:text-white italic tracking-tight">قائمة الأبطال الأخيرة</h3>
              </div>
              <Link href="/therapist/patients" className="flex items-center gap-2 text-primary font-black hover:underline underline-offset-[10px] decoration-2 tracking-widest uppercase text-sm italic">
                 عرض كل المرضى
                 <ChevronRight className="w-5 h-5" />
              </Link>
           </div>

           <div className="space-y-8">
            {patients.map((patient) => (
              <div key={patient.id} className="group flex flex-col md:flex-row items-center justify-between p-10 bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-slate-800 rounded-[3.5rem] border-2 border-transparent hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="flex items-center gap-8 flex-1">
                  <div className={`w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-inner group-hover:rotate-12 transition-transform duration-500 ${patient.gender === 'male' ? 'bg-blue/10' : 'bg-coral/10'}`}>
                    {patient.gender === 'male' ? '👦' : '👧'}
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-black text-slate-800 dark:text-white group-hover:text-primary transition-colors">{patient.name}</p>
                    <div className="flex items-center gap-3">
                       <span className="px-4 py-1.5 bg-slate-200/50 dark:bg-slate-700/50 rounded-full text-[10px] font-black italic text-slate-500 dark:text-slate-400">{patient.condition}</span>
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-black italic ${patient.status.includes('مكتمل') ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary animate-pulse"}`}>{patient.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-12 mt-8 md:mt-0 w-full md:w-auto">
                   <div className="flex items-center gap-6 flex-1 md:w-48">
                      <div className="w-full h-4 bg-slate-100 dark:bg-slate-900/50 rounded-full overflow-hidden border-2 border-white/40 dark:border-white/10 shadow-inner">
                        <div 
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-[2000ms] group-hover:brightness-110" 
                          style={{ width: `${patient.progress}%` }}
                        />
                      </div>
                      <span className="text-2xl font-black text-primary italic w-12 text-right">{patient.progress}%</span>
                   </div>
                  
                   <div className="flex gap-4">
                      <Link href={`/therapist/patients/${patient.id}`} className="min-w-[140px] text-center p-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl group-hover:shadow-glow-blue border border-white/10">
                         التفاصيل 🔍
                      </Link>
                      <button className="p-5 bg-primary/10 text-primary rounded-3xl hover:bg-primary hover:text-white transition-all shadow-soft border border-primary/20">
                         <Heart className="w-6 h-6" />
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Polish */}
        <footer className="mt-20 pt-10 border-t border-slate-200/40 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 italic text-sm">
           <p className="text-slate-400">© 2024 كوم-أون-كيد. صنع بكل حب للأبطال الصغار ❤️</p>
           <div className="flex gap-10">
              <Link href="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link>
           </div>
        </footer>
      </main>
    </div>
  );
}
