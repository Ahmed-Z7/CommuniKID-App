"use client";

import Link from "next/link";
import { useActionState } from "react";
import { parentSignupAction } from "@/app/actions/auth";

export default function ParentSignup() {
  const [state, formAction, isPending] = useActionState(parentSignupAction, null);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-soft-bg dark:bg-dark-bg relative overflow-hidden transition-all duration-1000">
      {/* Background Blobs for premium focus focus polish */}
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[100px] animate-blob delay-1000 pointer-events-none" />

      <div className="w-full max-w-4xl space-y-12 glass-card p-14 lg:p-20 rounded-[6rem] shadow-premium border-2 border-white/40 dark:border-white/5 z-10 animate-in slide-in-from-bottom-20 duration-1000 relative overflow-hidden font-bold">
        <div className="absolute top-0 right-0 w-full h-[12px] bg-gradient-to-r from-primary via-secondary to-accent" />
        
        <div className="text-center space-y-8">
          <div className="w-28 h-28 bg-white shadow-premium rounded-[2.5rem] flex items-center justify-center text-7xl mx-auto shadow-inner animate-float border-2 border-white/20">
            👪
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-dark dark:text-slate-100 items-center tracking-tight leading-tight italic drop-shadow-md">حساب ولي أمر جديد</h1>
          <p className="text-secondary dark:text-accent font-black tracking-[0.2em] text-lg uppercase italic opacity-90 animate-pulse">لنبدأ رحلة التعلم الممتعة مع طفلك 🚀 ✨</p>
        </div>

        <form action={formAction} className="space-y-12 group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/40 dark:bg-slate-800/40 p-12 rounded-[4rem] border-2 border-white shadow-premium backdrop-blur-md">
            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-secondary text-right">البريد الإلكتروني</label>
              <input 
                name="email"
                required
                type="email" 
                placeholder="parent@example.com"
                className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-secondary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
              />
            </div>
            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-secondary text-right">كلمة المرور</label>
              <input 
                name="password"
                required
                type="password" 
                placeholder="••••••••••••"
                className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-secondary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
              />
            </div>
          </div>

          <div className="border-t-2 border-slate-200/20 dark:border-slate-800/40 pt-12 space-y-12 group">
            <h3 className="text-4xl font-black text-slate-dark dark:text-slate-100 text-center tracking-widest italic bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">بيانات البطل الصغير 👦 👧</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4 group">
                <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary text-right">اسم الطفل</label>
                <input 
                  name="childName"
                  required
                  type="text" 
                  placeholder="محمد"
                  className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700"
                />
              </div>
              <div className="space-y-4 group">
                <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary text-right">سن الطفل</label>
                <input 
                  name="childAge"
                  required
                  type="number" 
                  placeholder="مثال: 5"
                  className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
              <div className="space-y-4 group">
                <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-secondary text-right">نوع الطفل</label>
                <select name="childGender" className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-secondary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 backdrop-blur-sm cursor-pointer appearance-none bg-[url('https://cdn-icons-png.flaticon.com/512/271/271210.png')] bg-[length:15px] bg-[right_20px_center] bg-no-repeat">
                  <option value="male">ولد 🦸‍♂️</option>
                  <option value="female">بنت 🦸‍♀️</option>
                </select>
              </div>
              <div className="space-y-4 group">
                <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-accent text-right">التحدي الحالي</label>
                <select name="condition" className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-accent/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 backdrop-blur-sm cursor-pointer appearance-none bg-[url('https://cdn-icons-png.flaticon.com/512/271/271210.png')] bg-[length:15px] bg-[right_20px_center] bg-no-repeat">
                  <option value="autism">طيف توحد 🧩</option>
                  <option value="speech_delay">تأخر نطق 📢</option>
                </select>
              </div>
            </div>
          </div>

          {state?.error && (
            <p className="text-coral font-bold text-center text-xl animate-shake">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full btn-premium py-10 text-4xl shadow-premium border-4 border-white/20"
          >
            {isPending ? "جاري إنشاء الحساب..." : "إنشاء حساب البطل والبدء 🚀 ✨"}
          </button>
        </form>

        <div className="text-center pt-12 border-t border-slate-200/40 dark:border-slate-800/40">
          <p className="text-slate-dark/40 dark:text-slate-400 font-black opacity-80 text-lg italic">
            لديك حساب مسجل؟{" "}
            <Link href="/login" className="text-secondary dark:text-accent font-black hover:underline underline-offset-[12px] decoration-4">
              سجل دخولك من هنا 🔍
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
