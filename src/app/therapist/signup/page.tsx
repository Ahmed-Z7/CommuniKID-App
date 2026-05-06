"use client";

import Link from "next/link";
import { useActionState } from "react";
import { therapistSignupAction } from "@/app/actions/auth";

export default function TherapistSignup() {
  const [state, formAction, isPending] = useActionState(therapistSignupAction, null);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-soft-bg dark:bg-dark-bg relative overflow-hidden transition-all duration-1000">
      {/* Background Blobs for premium focus polish */}
      <div className="absolute top-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[100px] animate-blob delay-1000 pointer-events-none" />

      <div className="w-full max-w-2xl space-y-12 glass-card p-14 lg:p-20 rounded-[6rem] shadow-2xl border-2 border-white/40 dark:border-white/5 z-10 animate-in slide-in-from-bottom-20 duration-1000 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[10px] bg-gradient-to-r from-primary via-secondary to-accent" />
        
        <div className="text-center space-y-8">
          <div className="w-28 h-28 bg-gradient-to-tr from-primary via-secondary to-accent/30 rounded-[3rem] flex items-center justify-center text-7xl mx-auto shadow-inner animate-float animate-glow border-2 border-white/20">
            👨‍⚕️
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-800 dark:text-slate-100 items-center tracking-tight leading-tight italic drop-shadow-md">حساب دكتور جديد</h1>
          <p className="text-primary dark:text-accent font-black tracking-widest text-lg uppercase italic opacity-90 animate-pulse">لنبدأ رحلة المساعدة العلمية المتميزة ✨</p>
        </div>

        <form action={formAction} className="space-y-10 group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-500 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">الاسم بالكامل</label>
              <div className="relative">
                 <input 
                   name="name"
                   required
                   type="text" 
                   placeholder="د. أحمد محمد"
                   className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/20 outline-none transition-all shadow-md text-2xl font-black text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
                 />
              </div>
            </div>

            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-500 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">البريد الإلكتروني</label>
              <div className="relative">
                 <input 
                   name="email"
                   required
                   type="email" 
                   placeholder="doctor@example.com"
                   className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/20 outline-none transition-all shadow-md text-2xl font-black text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
                 />
              </div>
            </div>
          </div>

          <div className="space-y-4 group">
            <label className="block text-sm font-black text-slate-500 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">كلمة المرور السرية</label>
            <div className="relative">
               <input 
                 name="password"
                 required
                 type="password" 
                 placeholder="••••••••••••"
                 className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/20 outline-none transition-all shadow-md text-2xl font-black text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
               />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-500 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">النوع بالتحديد</label>
              <select name="gender" className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/20 outline-none transition-all shadow-md text-2xl font-black text-slate-800 dark:text-slate-100 backdrop-blur-sm cursor-pointer appearance-none bg-[url('https://cdn-icons-png.flaticon.com/512/271/271210.png')] bg-[length:15px] bg-[right_20px_center] bg-no-repeat">
                <option value="male">ذكر 🎩</option>
                <option value="female">أنثى 👗</option>
              </select>
            </div>
            <div className="space-y-4 group">
              <label className="block text-sm font-black text-slate-500 dark:text-slate-400 mr-4 uppercase tracking-[0.2em] transition-colors group-focus-within:text-primary">التخصص الطبي</label>
              <input 
                name="specialization"
                required
                type="text" 
                placeholder="تخاطب اطفال"
                className="w-full p-8 rounded-[3.5rem] border-none bg-white/60 dark:bg-slate-800/60 focus:ring-8 focus:ring-primary/20 outline-none transition-all shadow-md text-2xl font-black text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 backdrop-blur-md"
              />
            </div>
          </div>

          {state?.error && (
            <p className="text-coral font-bold text-center text-xl animate-shake">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full btn-premium py-8 text-3xl mt-8 shadow-glow-blue border-2 border-white/30 hover:tracking-[0.1em] transition-all transform hover:scale-[1.03] active:scale-95 duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "جاري إنشاء الحساب..." : "إنشاء حسابك الطبي الآن ✅"}
          </button>
        </form>

        <div className="text-center pt-12 border-t border-slate-200/40 dark:border-slate-800/40">
          <p className="text-slate-500 dark:text-slate-400 font-black opacity-80 text-lg italic">
            لديك حساب مسجل؟{" "}
            <Link href="/login" className="text-primary dark:text-accent font-black hover:underline underline-offset-[12px] decoration-4">
              سجل دخولك من هنا 🔍
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
