"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Lock, Crown, Sparkles, Shirt, Glasses, ShoppingBag } from "lucide-react";

export default function AvatarPage() {
  const [level, setLevel] = useState(3);
  const [activeTab, setActiveTab] = useState("all");





















  //hhh

  const items = [
    { id: 1, type: "glasses", icon: "👓", levelRequired: 1, unlocked: true, name: "نظارة ذكية" },
    { id: 2, type: "hat", icon: "🎩", levelRequired: 2, unlocked: true, name: "قبعة الساحر" },
    { id: 3, type: "accessory", icon: "🎒", levelRequired: 4, unlocked: false, name: "حقيبة الأبطال" },
    { id: 4, type: "outfit", icon: "🥋", levelRequired: 5, unlocked: false, name: "زي النينجا" },
    { id: 5, type: "glasses", icon: "🕶", levelRequired: 1, unlocked: true, name: "نظارة شمسية" },
    { id: 6, type: "hat", icon: "👑", levelRequired: 10, unlocked: false, name: "تاج الملوك" },
    { id: 7, type: "hat", icon: "🎓", levelRequired: 8, unlocked: false, name: "قبعة التخرج" },
    { id: 8, type: "accessory", icon: "🧣", levelRequired: 3, unlocked: true, name: "سكارف الشتاء" },
    { id: 9, type: "outfit", icon: "🦸‍♂️", levelRequired: 15, unlocked: false, name: "زي السوبر" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg flex flex-col p-8 lg:p-12 font-bold pb-32 transition-colors duration-1000 overflow-hidden relative">
      {/* Background Polish */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <header className="flex items-center justify-between mb-12 z-10 animate-in slide-in-from-top-10 duration-700">
        <div className="flex items-center gap-6">
          <Link href="/parent/home" className="p-4 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-primary">
            <ChevronLeft className="w-8 h-8" />
          </Link>
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tight italic">تجهيز بطلنا ✨</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold opacity-80">خصص الشخصية كما تحب</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-xl border border-white/20">
          <Crown className="w-8 h-8 text-secondary animate-bounce" />
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-black">المستوى الحالي</p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">فل {level}</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-20 z-10 animate-in zoom-in-95 duration-1000 items-center justify-center max-w-7xl mx-auto w-full">
        {/* Avatar Display - HUGE & PREMIUM */}
        <div className="lg:flex-1 w-full max-w-lg">
          <div className="glass-card aspect-square rounded-[6rem] lg:rounded-[8rem] shadow-2xl relative flex items-center justify-center border-4 border-white/60 dark:border-white/10 group overflow-hidden bg-gradient-to-tr from-white/10 via-transparent to-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

            {/* Dynamic Light Rays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-pulse" />

            <div className="text-[200px] lg:text-[320px] z-10 animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] transition-transform hover:scale-115 duration-700">
              🧒
            </div>

            {/* Status Info Overlay */}
            <div className="absolute bottom-12 inset-x-0 flex justify-center">
              <div className="flex items-center gap-3 px-8 py-4 bg-slate-900/80 backdrop-blur-2xl text-white rounded-[2rem] text-sm font-black shadow-2xl tracking-widest border border-white/10 italic">
                <Sparkles className="w-5 h-5 text-accent animate-spin" />
                هيبة الأبطال مفعلة
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-20 right-20 w-8 h-8 bg-accent/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-float delay-1000" />
          </div>
        </div>

        {/* Item Selection Section */}
        <section className="lg:flex-1 w-full space-y-10 animate-in slide-in-from-right-20 duration-1000">
          {/* Tab Selection */}
          <div className="flex gap-4 p-2 bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
            {[
              { id: "all", icon: ShoppingBag, label: "الكل" },
              { id: "outfit", icon: Shirt, label: "ملابس" },
              { id: "glasses", icon: Glasses, label: "نظارات" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[2rem] font-black transition-all ${activeTab === tab.id ? "bg-primary text-white shadow-glow-blue" : "text-slate-400 hover:bg-white/10"}`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 lg:gap-8 p-1 overflow-visible h-[450px] overflow-y-auto no-scrollbar pb-10">
            {items.filter(item => activeTab === "all" || item.type === activeTab).map((item, i) => (
              <div
                key={item.id}
                className={`group glass-card p-8 lg:p-10 rounded-[3rem] lg:rounded-[4rem] flex flex-col items-center justify-center gap-4 transition-all relative transform border-2 ${item.unlocked ? 'hover:scale-110 active:scale-95 cursor-pointer hover:border-primary/40 border-transparent shadow-xl hover:shadow-glow-blue bg-white/40 dark:bg-white/5' : 'grayscale opacity-50 bg-slate-200/50 dark:bg-slate-800/30 border-transparent hover:scale-105'
                  }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-5xl lg:text-7xl group-hover:rotate-12 transition-transform duration-500 mb-2">{item.icon}</div>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.name}</p>

                {!item.unlocked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 dark:bg-black/20 rounded-[3rem] lg:rounded-[4rem] backdrop-blur-[2px]">
                    <div className="p-3 bg-slate-900 text-white rounded-full shadow-2xl mb-2">
                      <Lock className="w-5 h-5" />
                    </div>
                    <span className="text-[12px] text-white font-black bg-secondary/80 px-4 py-1 rounded-full italic shadow-glow-coral">فل {item.levelRequired}</span>
                  </div>
                )}
                {item.unlocked && (
                  <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-accent shadow-glow-coral animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Quick Apply Button */}
          <div className="pt-4">
            <button className="w-full btn-premium py-8 text-2xl rounded-[3rem] shadow-glow-blue border-2 border-white/30 hover:tracking-[0.1em] transition-all transform hover:scale-[1.03] active:scale-95 duration-500 uppercase italic">
              حفظ الستايل الجديد ✅
            </button>
          </div>
        </section>
      </main>

      {/* Reward Hint */}
      <div className="fixed bottom-10 left-10 p-8 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/10 animate-in slide-in-from-left-20 duration-1000 hidden lg:flex items-center gap-6 italic group cursor-pointer hover:scale-105 transition-transform">
        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-4xl shadow-glow-coral group-hover:rotate-12 transition-transform">👑</div>
        <div>
          <p className="text-slate-400 uppercase tracking-widest text-[10px] font-black mb-1">المهمة القادمة</p>
          <p className="text-white text-lg font-black">خلص 5 كروت لفتح <span className="text-accent underline underline-offset-4 decoration-accent/40">التاج الماسي</span></p>
        </div>
      </div>
    </div>
  );
}
