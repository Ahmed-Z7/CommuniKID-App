"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddCard() {
  const [method, setMethod] = useState<"manual" | "ai">("manual");

  return (
    <main className="min-h-screen bg-soft-bg dark:bg-dark-bg p-8 flex flex-col font-black transition-all duration-1000 overflow-hidden relative">
      {/* Background Polish */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <header className="flex items-center gap-6 mb-12 z-10 animate-in slide-in-from-top-10 duration-700">
        <Link href="/parent/home" className="p-5 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl text-3xl hover:rotate-12 transition-all active:scale-90">
          ⬅️
        </Link>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-slate-100 tracking-tighter italic">إضافة كارت جديد ✨</h1>
      </header>

      <div className="max-w-3xl mx-auto w-full space-y-12 z-10 animate-in zoom-in-95 duration-1000">
        {/* Method Toggle - Extremely Premium */}
        <div className="flex bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl p-3 rounded-[3.5rem] border border-white/20 dark:border-white/5 shadow-2xl transition-all duration-700">
          <button 
            onClick={() => setMethod("manual")}
            className={`flex-1 py-6 rounded-[3rem] font-black italic transition-all duration-500 transform ${method === 'manual' ? 'bg-primary text-white shadow-glow-blue scale-100' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}
          >
            إضافة يدوية ✍️
          </button>
          <button 
            onClick={() => setMethod("ai")}
            className={`flex-1 py-6 rounded-[3rem] font-black italic transition-all duration-500 transform ${method === 'ai' ? 'bg-secondary text-white shadow-glow-purple scale-100' : 'text-slate-500 dark:text-slate-400 hover:text-secondary'}`}
          >
            بمساعدة الذكاء الاصطناعي 🤖
          </button>
        </div>

        {/* Content Form - Glassmorphic */}
        <div className="glass-card p-12 lg:p-16 rounded-[5rem] shadow-2xl border border-white/40 dark:border-white/5 space-y-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          
          <div className="space-y-4">
            <label className="text-slate-500 dark:text-slate-400 block mr-4 text-sm font-black uppercase tracking-widest italic">الكلمة أو الجملة</label>
            <input 
              type="text" 
              placeholder="اكتب الكلمة هنا يا بطل..."
              className="w-full p-8 bg-slate-100/50 dark:bg-slate-900/50 rounded-[2.5rem] border-none focus:ring-4 focus:ring-primary/30 outline-none transition-all text-2xl font-black text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-4">
            <label className="text-slate-500 dark:text-slate-400 block mr-4 text-sm font-black uppercase tracking-widest italic font-bold">التصنيف</label>
            <select className="w-full p-8 bg-slate-100/50 dark:bg-slate-900/50 rounded-[2.5rem] border-none focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary/40 outline-none transition-all text-2xl font-black text-slate-800 dark:text-slate-100 cursor-pointer appearance-none bg-white/40 dark:bg-slate-800/40">
              <option>حيوانات 🦁</option>
              <option>فواكه 🍎</option>
              <option>مشاعر 😊</option>
              <option>أفعال 🏃‍♂️</option>
            </select>
          </div>

          {method === "manual" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-10 duration-700">
              <div className="border-4 border-dashed border-gray-200 dark:border-slate-800 rounded-[3rem] p-12 flex flex-col items-center justify-center gap-6 text-slate-400 group-hover:border-primary transition-all cursor-pointer bg-white/20 dark:bg-slate-800/20 active:scale-95">
                <span className="text-7xl animate-float">📸</span>
                <span className="text-sm font-black italic">ارفع صورة رائعة</span>
              </div>
              <div className="border-4 border-dashed border-gray-200 dark:border-slate-800 rounded-[3rem] p-12 flex flex-col items-center justify-center gap-6 text-slate-400 group-hover:border-secondary transition-all cursor-pointer bg-white/20 dark:bg-slate-800/20 active:scale-95">
                <span className="text-7xl animate-float delay-300">🎤</span>
                <span className="text-sm font-black italic">سجل صوتك بوضوح</span>
              </div>
            </div>
          ) : (
            <div className="bg-secondary/5 dark:bg-secondary/10 p-10 lg:p-14 rounded-[3.5rem] border-2 border-dashed border-secondary/20 flex flex-col items-center gap-8 text-center animate-in zoom-in-90 duration-700">
              <div className="w-28 h-28 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center text-7xl animate-glow shadow-inner">
                ✨
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xl font-bold italic leading-relaxed">
                الذكاء الاصطناعي سيقوم بإنشاء صورة مذهلة ونطق طبيعي 100% باللهجة المصرية واللغة العربية الفصحى تلقائياً! 🌟
              </p>
            </div>
          )}

          <button className={`w-full py-8 rounded-[3.5rem] text-3xl text-white shadow-2xl transition-all hover:scale-[1.03] active:scale-95 border-2 border-white/20 hover:tracking-[0.1em] font-black italic ${
            method === 'manual' ? 'bg-primary shadow-glow-blue' : 'bg-secondary shadow-glow-purple'
          }`}>
            حفظ الكارت الآن ✅
          </button>
        </div>
      </div>
    </main>
  );
}
