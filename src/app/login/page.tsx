"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-soft-bg dark:bg-dark-bg relative overflow-hidden transition-all duration-1000">
      {/* Background Blobs for specific login focus polish */}
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[100px] animate-blob delay-1000 pointer-events-none" />

      <div className="w-full max-w-xl space-y-12 glass-card p-14 lg:p-20 rounded-[6rem] shadow-2xl border-2 border-white/40 dark:border-white/5 z-10 animate-in zoom-in-95 duration-1000 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-primary via-secondary to-accent" />
        
        <div className="text-center space-y-8">
          <div className="w-28 h-28 bg-white shadow-premium rounded-[2.5rem] flex items-center justify-center text-6xl mx-auto animate-float border-2 border-white/20">
            🔐
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-dark dark:text-slate-100 items-center tracking-tight leading-tight italic drop-shadow-md">منورنا تاني يا بطل!</h1>
          <p className="text-primary dark:text-accent font-black tracking-widest text-lg uppercase italic opacity-90 animate-pulse">لنكمل معاً رحلة التطور والنمو ✨</p>
        </div>

        <form action={formAction} className="space-y-10 group">
          <div className="space-y-4 group">
            <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary text-right">البريد الإلكتروني</label>
            <div className="relative">
               <input 
                 name="email"
                 required
                 type="email" 
                 placeholder="name@example.com"
                 className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
               />
               <span className="absolute left-8 top-1/2 -translate-y-1/2 text-3xl opacity-30 select-none">📧</span>
            </div>
          </div>

          <div className="space-y-4 group">
            <label className="block text-sm font-black text-slate-dark/50 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-secondary text-right">كلمة المرور السرية</label>
            <div className="relative">
               <input 
                 name="password"
                 required
                 type="password" 
                 placeholder="••••••••••••"
                 className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-secondary/10 outline-none transition-all shadow-premium text-2xl font-black text-slate-dark dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
               />
               <span className="absolute left-8 top-1/2 -translate-y-1/2 text-3xl opacity-30 select-none">🔑</span>
            </div>
          </div>

          {state?.error && (
            <p className="text-coral font-bold text-center text-xl animate-shake">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full btn-premium py-8 text-3xl mt-8 shadow-premium border-2 border-white/20"
          >
            {isPending ? "جاري الدخول..." : "تـسـجـيـل الـدخـول الـسـريع ✅"}
          </button>
        </form>

        <div className="text-center pt-12 border-t border-slate-200/40 dark:border-slate-800/40 space-y-6">
          <p className="text-slate-dark/40 dark:text-slate-400 font-black opacity-80 text-lg italic">
            أول مرة هنا؟{" "}
            <Link href="/" className="text-primary dark:text-accent font-black hover:underline underline-offset-[12px] decoration-4">
               انضم لعالمنا السحري كبطل جديد 🔍
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
