"use client";

import Link from "next/link";
import { ChevronLeft, TrendingUp, Star, Clock, Zap, Target, BarChart3, Activity } from "lucide-react";

export default function ProgressPage() {
  const categories = [
    { name: "حيوانات", accuracy: 85, color: "from-blue to-accent", icon: "🦁" },
    { name: "فواكه", accuracy: 50, color: "from-coral to-peach", icon: "🍎" },
    { name: "مشاعر", accuracy: 65, color: "from-sage to-primary", icon: "😊" },
    { name: "أفعال", accuracy: 40, color: "from-primary to-blue", icon: "🏃" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg flex flex-col p-8 lg:p-12 font-bold pb-40 transition-colors duration-1000 overflow-x-hidden relative">
      {/* Background Polish */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <header className="flex items-center gap-6 mb-16 z-10 animate-in slide-in-from-top-10 duration-700">
        <Link href="/parent/home" className="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-primary">
          <ChevronLeft className="w-8 h-8" />
        </Link>
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight italic">إحصائيات العظمة 📊 ✨</h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold opacity-80">نتابع نموك وتطورك يا بطل</p>
        </div>
      </header>

      <main className="space-y-16 z-10 max-w-6xl mx-auto w-full animate-in zoom-in-95 duration-1000">
        {/* Main Stats Card - Stunning Progress Circle */}
        <div className="glass-card p-12 lg:p-20 rounded-[5rem] lg:rounded-[6rem] shadow-2xl border border-white/40 dark:border-white/5 flex flex-col lg:flex-row items-center gap-16 text-center lg:text-right relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse -mr-32 -mt-32" />
          
          <div className="relative group-hover:scale-105 transition-transform duration-700">
             <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full border-[20px] border-primary/10 flex flex-col items-center justify-center relative shadow-inner bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl animate-glow">
                <span className="text-7xl lg:text-8xl font-black text-primary drop-shadow-md">72%</span>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black mt-2">دقة عامة</p>
                <div className="absolute inset-0 border-[20px] border-primary rounded-full border-t-transparent animate-spin duration-3000 opacity-40" />
             </div>
             {/* Micro Sparkles */}
             <Star className="absolute top-0 right-0 text-accent w-10 h-10 animate-bounce fill-accent" />
             <Star className="absolute bottom-4 left-4 text-secondary w-6 h-6 animate-pulse fill-secondary" />
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-4">
               <span className="px-8 py-3 bg-primary/20 text-primary rounded-full text-xs font-black italic tracking-widest uppercase border border-primary/20">ممتاز جداً</span>
               <span className="px-8 py-3 bg-secondary/20 text-secondary rounded-full text-xs font-black italic tracking-widest uppercase border border-secondary/20 animate-pulse">نجم الأسبوع</span>
            </div>
            <h2 className="text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight italic">أداء مذهل يا بطل! 🚀</h2>
            <p className="text-2xl text-slate-500 dark:text-slate-400 font-bold leading-relaxed opacity-90 max-w-2xl">لقد سجلت أعلى معدل نطق كلمات صحيح هذا الأسبوع. أنت تتحسن بسرعة البرق! ⚡️</p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 rounded-3xl border border-white/20">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">نقاط الخبرة</p>
                  <p className="text-3xl font-black text-primary">1,250 XP</p>
               </div>
               <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 rounded-3xl border border-white/20">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">التقدم اليومي</p>
                  <p className="text-3xl font-black text-secondary">+15%</p>
               </div>
            </div>
          </div>
        </div>

        {/* Daily Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "كلمات جديدة", value: "15", icon: Zap, color: "text-blue", bg: "bg-blue/10", sub: "كارت" },
            { label: "أطول مدة", value: "8", icon: Clock, color: "text-coral", bg: "bg-coral/10", sub: "أيام" },
            { label: "نجوم اليوم", value: "120", icon: Star, color: "text-accent", bg: "bg-accent/10", sub: "نجمة" },
            { label: "الوقت", value: "45", icon: Activity, color: "text-sage", bg: "bg-sage/10", sub: "دقيقة" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-10 rounded-[4rem] shadow-soft border border-white/20 dark:border-white/5 text-center space-y-4 hover:shadow-glow-blue transition-all duration-500 transform hover:-translate-y-4 group">
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] italic mb-1">{stat.label}</p>
                <p className="text-4xl font-black text-slate-800 dark:text-white">{stat.value} <span className="text-xs font-bold opacity-40 block mt-1">{stat.sub}</span></p>
              </div>
            </div>
          ))}
        </section>

        {/* Category breakdown with Gradient Progress Bars */}
        <section className="space-y-10 animate-in slide-in-from-bottom-20 duration-1000">
          <div className="flex justify-between items-center px-8">
             <div className="flex items-center gap-4">
                <BarChart3 className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight italic">تحليل القوة حسب الأقسام 📊</h3>
             </div>
             <span className="text-slate-400 text-sm font-black italic uppercase tracking-widest opacity-60">تحديث فوري</span>
          </div>

          <div className="space-y-12 bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl p-12 lg:p-16 rounded-[4rem] lg:rounded-[6rem] shadow-2xl border border-white/20 dark:border-white/5">
            {categories.map((cat, i) => (
              <div key={i} className="space-y-5 group">
                <div className="flex justify-between items-center px-4">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-xl">{cat.icon}</span>
                    <span className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-slate-100 italic transition-colors group-hover:text-primary">{cat.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-800 dark:text-white italic">{cat.accuracy}%</span>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">الدقة</p>
                  </div>
                </div>
                <div className="w-full h-8 lg:h-10 bg-slate-100 dark:bg-slate-900/50 rounded-full overflow-hidden border-4 border-white/60 dark:border-white/10 shadow-inner p-1.5">
                  <div 
                    className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-2000 shadow-xl group-hover:brightness-110 group-hover:shadow-glow-blue`}
                    style={{ width: `${cat.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Encouragement - Visual Goal */}
        <div className="p-12 lg:p-16 bg-gradient-to-tr from-primary via-blue to-accent rounded-[5rem] lg:rounded-[6rem] text-white text-center shadow-glow-blue animate-float relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
          <div className="absolute inset-0 bg-white/10 rotate-12 transform translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000" />
          <Target className="w-20 h-20 text-white/20 absolute -top-4 -right-4 animate-pulse" />
          <p className="text-4xl lg:text-5xl font-black italic tracking-tight drop-shadow-2xl relative z-10">
             باقي لك <span className="underline underline-offset-12 decoration-white/40">5 كروت فقط</span> وتفتح <span className="text-accent drop-shadow-glow">نضارة الأبطال</span> الذهبية! 😎 ✨
          </p>
        </div>
      </main>
    </div>
  );
}
