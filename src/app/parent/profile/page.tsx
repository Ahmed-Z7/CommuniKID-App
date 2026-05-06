"use client";

import Link from "next/link";
import { User, Settings, Shield, Bell, CreditCard, LogOut, ChevronLeft, Heart, Sparkles, Award } from "lucide-react";

export default function ParentProfile() {
  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-8 lg:p-12 pb-44 transition-colors duration-1000 font-bold overflow-hidden relative">
      {/* Background Polish */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[120px] animate-blob delay-2000 pointer-events-none" />

      <header className="flex items-center gap-6 mb-16 z-10 animate-in slide-in-from-right-10 duration-700 max-w-7xl mx-auto w-full">
        <Link href="/parent/home" className="w-16 h-16 glass-card rounded-3xl flex items-center justify-center text-primary shadow-premium hover:scale-110 active:scale-95 transition-all">
          <ChevronLeft className="w-8 h-8" />
        </Link>
        <div>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-dark dark:text-white italic tracking-tight">إعدادات العظمة ⚙️ ✨</h1>
          <p className="text-slate-dark/50 dark:text-slate-400 font-bold opacity-80 mt-1">إدارة حسابك الشخصي وبيانات الأبطال</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 z-10 relative animate-in zoom-in-95 duration-1000 max-w-7xl mx-auto w-full">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-12">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[5rem] text-center space-y-8 relative overflow-hidden border-2 border-white/60 shadow-premium group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse" />
            
            <div className="relative inline-block">
               <div className="w-40 h-40 bg-white shadow-premium rounded-[3rem] mx-auto flex items-center justify-center text-7xl animate-float border-4 border-white/40 dark:border-white/10 group-hover:rotate-12 transition-transform duration-700">
                 👪
               </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl font-black text-slate-dark dark:text-white tracking-tight italic">أحمد المحمدي</h2>
              <p className="text-primary dark:text-accent font-black tracking-widest uppercase italic bg-primary/10 px-6 py-2 rounded-full inline-block text-sm">ولي أمر بطلنا: <span className="underline underline-offset-4 decoration-primary/40">ياسين</span></p>
            </div>

            <div className="flex justify-center gap-4 py-8 border-t border-b border-slate-100/50 dark:border-white/5">
               <div className="text-center">
                  <p className="text-3xl font-black text-slate-dark dark:text-white">12</p>
                  <p className="text-[10px] text-slate-dark/40 uppercase tracking-widest">يوم متواصل</p>
               </div>
               <div className="w-px h-10 bg-slate-200 dark:bg-white/10 mx-6" />
               <div className="text-center">
                  <p className="text-3xl font-black text-slate-dark dark:text-white">1,250</p>
                  <p className="text-[10px] text-slate-dark/40 uppercase tracking-widest">نقطة قوة</p>
               </div>
            </div>

            <button className="w-full btn-premium py-6 text-xl shadow-premium border-2 border-white/20">
               تعديل الملف الشخصي ✏️
            </button>
          </div>

          <div className="bg-white/40 dark:bg-slate-900/40 p-10 rounded-[4rem] space-y-6 border border-white/60 shadow-premium">
            <h3 className="text-xs font-black text-slate-dark/30 uppercase tracking-widest pr-4 italic opacity-60">إعدادات سريعة جداً</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-8 rounded-[2.5rem] bg-white dark:bg-slate-800 hover:bg-red-500/10 dark:hover:bg-red-500/10 hover:text-red-500 transition-all text-slate-dark/60 dark:text-slate-400 group border border-transparent shadow-soft">
                <div className="flex items-center gap-4">
                  <LogOut className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  <span className="font-black italic text-xl">تسجيل الخروج الآمن</span>
                </div>
                <ChevronLeft className="w-6 h-6 opacity-40 translate-x-1 group-hover:translate-x-0 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Settings Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { icon: User, title: "بيانات البطل", desc: "تحرير اسم، عمر، وحالة طفلك الصحية", color: "text-blue", bg: "bg-blue/10 shadow-glow-blue" },
            { icon: Bell, title: "نظام التنبيهات", desc: "إدارة إشعارات الجلسات والتقدم اليومي", color: "text-coral", bg: "bg-coral/10 shadow-glow-coral" },
            { icon: Shield, title: "الخصوصية والأمان", desc: "حماية حسابك وتغيير كلمة المرور السرية", color: "text-sage", bg: "bg-sage/10 shadow-glow-blue" },
            { icon: Heart, title: "المفضلة", desc: "الوصول السريع للكلمات التي يحبها بطلنا", color: "text-secondary", bg: "bg-secondary/10 shadow-glow-coral" },
            { icon: Award, title: "الإنجازات", desc: "استعراض كل الأوسمة التي حصل عليها البطل", color: "text-accent", bg: "bg-accent/10 shadow-glow-blue" },
            { icon: CreditCard, title: "الاشتراك المميز", desc: "إدارة خطة الدفع والوصول للمحتوى الحصري", color: "text-orange", bg: "bg-orange/10 shadow-glow-coral" },
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white dark:bg-slate-900 p-12 rounded-[4.5rem] group hover:-translate-y-2 transition-all cursor-pointer border-2 border-transparent hover:border-primary/20 shadow-premium relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-24 h-24 rounded-[2.5rem] ${item.bg} ${item.color} flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500`}>
                <item.icon className="w-12 h-12" />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-3xl font-black text-slate-dark dark:text-white italic tracking-tight">{item.title}</h4>
                <Sparkles className="w-7 h-7 text-accent opacity-0 group-hover:opacity-100 animate-spin" />
              </div>
              <p className="text-slate-dark/50 dark:text-slate-400 text-lg font-bold opacity-80 mt-4 leading-relaxed line-clamp-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Floating Premium Slate Pill) */}
      <nav className="nav-pill-slate">
        <Link href="/parent/home" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🏠</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">الرئيسية</span>
        </Link>
        <Link href="/parent/progress" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📈</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">التقدم</span>
        </Link>
        <div className="w-16 h-16 flex items-center justify-center">
            <Link href="/parent/home" className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-premium text-slate-dark text-4xl font-black border-4 border-slate-dark transform hover:scale-110 active:scale-90 transition-all">
               +
            </Link>
        </div>
        <Link href="/parent/avatar" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🤵</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">الأفاتار</span>
        </Link>
        <Link href="/parent/profile" className="flex flex-col items-center p-3 text-white group relative">
          <div className="absolute -top-16 w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-3xl shadow-glow-coral border-4 border-slate-dark translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            ⚙️
          </div>
          <span className="text-[11px] font-black mt-8 uppercase tracking-widest text-accent">حسابي</span>
        </Link>
      </nav>
    </div>
  );
}
