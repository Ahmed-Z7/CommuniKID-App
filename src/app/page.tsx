"use client";

import Link from "next/link";
import { useState } from "react";
import { seedDatabaseAction } from "@/app/actions/seed";
import { Sparkles, Activity, ShieldCheck, Heart, Zap, Database, Lightbulb } from "lucide-react";

export default function Home() {
  const [seedStatus, setSeedStatus] = useState<string | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSeed = async () => {
    setIsSeeding(true);
    const res = await seedDatabaseAction();
    setIsSeeding(false);
    if ("message" in res) {
      setSeedStatus(res.message ?? "Success");
    } else {
      setSeedStatus(res.error ?? "Error");
    }
    setTimeout(() => setSeedStatus(null), 5000);
  };

  return (
    <main className="min-h-screen bg-soft-bg flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-1000">
      {/* Dynamic Animated Background Blobs - Refined Colors */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] animate-blob delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Interactive Elements */}
      <div className="absolute top-20 left-[10%] text-6xl animate-float opacity-40 select-none">🧩</div>
      <div className="absolute bottom-40 right-[15%] text-7xl animate-float delay-1000 opacity-40 select-none">🚀</div>
      <div className="absolute top-[40%] right-[5%] text-5xl animate-float delay-500 opacity-30 select-none">🎨</div>

      <div className="z-10 text-center max-w-6xl space-y-16 animate-in fade-in zoom-in duration-1000">
        <div className="space-y-10">
          <div className="mx-auto inline-flex items-center gap-4 px-10 py-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl rounded-full text-base font-black text-slate-dark dark:text-accent border border-white/60 dark:border-white/5 shadow-premium animate-glow italic hover:scale-110 transition-transform cursor-default">
             <Sparkles className="w-6 h-6 animate-pulse text-secondary" />
             بكل حب نساعدهم يكبروا ويبدعوا بأنفسهم ✨
          </div>
          
          <h1 className="text-72 mt-8 md:text-[10rem] font-black tracking-tighter text-slate-dark leading-[0.85] drop-shadow-xl">
            <span className="bg-gradient-to-tr from-primary via-secondary to-accent bg-clip-text text-transparent italic">كُـــوم-أون</span>
            <br />
            <span className="text-slate-dark dark:text-white drop-shadow-md">كيد - KID</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-slate-dark/70 dark:text-slate-400 font-bold leading-relaxed max-w-4xl mx-auto drop-shadow-sm px-4">
            أول منصة ذكية في <span className="text-primary italic">الشرق الأوسط</span> لمساعدة طفلك على التواصل والنطق <br className="hidden md:block" /> بذكاء اصطناعي يفهمه ويحبه ❤️ 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-20 px-4">
          {/* Therapist Card - Hyper Premium */}
          <Link 
            href="/therapist/signup"
            className="group glass-card p-16 rounded-[4.5rem] flex flex-col items-center gap-12 border-2 border-white/60 dark:border-white/10 relative overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="w-48 h-48 bg-primary/10 rounded-[3.5rem] flex items-center justify-center text-8xl lg:text-9xl group-hover:rotate-12 transition-transform duration-700 animate-float shadow-inner">
              👨‍⚕️
            </div>
            <div className="space-y-6 relative">
              <h2 className="text-5xl font-black text-slate-dark dark:text-white tracking-tight italic">أنا دكتور تخاطب</h2>
              <p className="text-slate-dark/60 dark:text-slate-400 text-xl font-bold leading-relaxed italic">أتابع الحالات، أخطط للمستقبل، وأدعم الصغار علمياً</p>
            </div>
            <div className="px-14 py-7 bg-primary text-white rounded-[2.5rem] text-xl font-black shadow-glow-blue md:opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
               ابدأ رحلة العلاج دكتور 🏥
            </div>
          </Link>

          {/* Parent Card - Hyper Premium */}
          <Link 
            href="/parent/signup"
            className="group glass-card p-16 rounded-[4.5rem] flex flex-col items-center gap-12 border-2 border-white/40 dark:border-white/10 relative overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="w-48 h-48 bg-secondary/10 rounded-[3.5rem] flex items-center justify-center text-8xl lg:text-9xl group-hover:-rotate-12 transition-transform duration-700 animate-float delay-1000 shadow-inner">
              👪
            </div>
            <div className="space-y-6 relative">
              <h2 className="text-5xl font-black text-slate-dark dark:text-white tracking-tight italic">أنا ولي أمر بطل</h2>
              <p className="text-slate-dark/60 dark:text-slate-400 text-xl font-bold leading-relaxed italic">أرافق طفلي في رحلة النمو، خطوة بخطوة</p>
            </div>
            <div className="px-14 py-7 bg-secondary text-white rounded-[2.5rem] text-xl font-black shadow-glow-coral md:opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
               ادعم بطلك الصغير ✨
            </div>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
           {[
             { icon: Activity, label: "تحليل نطق" },
             { icon: ShieldCheck, label: "أمان كامل" },
             { icon: Heart, label: "واجهة طفل" },
             { icon: Lightbulb, label: "ذكاء عالمي" }
           ].map((feat, i) => (
             <div key={i} className="flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                <feat.icon className="w-10 h-10 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest italic text-slate-dark/50">{feat.label}</span>
             </div>
           ))}
        </div>

        <div className="pt-20 space-y-10 animate-in fade-in duration-1000 delay-1000">
          <p className="text-slate-dark/30 dark:text-slate-600 text-sm font-black tracking-[0.4em] uppercase italic">
            مدعوم بالذكاء الاصطناعي المصري الأول 🇪🇬
          </p>
          
          <button 
            onClick={handleSeed}
            disabled={isSeeding}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/40 dark:bg-white/5 rounded-full text-xs font-black text-slate-dark/40 hover:text-primary transition-all shadow-premium italic uppercase tracking-widest disabled:opacity-50"
          >
            <Database className={`w-4 h-4 ${isSeeding ? "animate-spin" : ""}`} />
            {seedStatus || (isSeeding ? "Initializing..." : "Seed Database (Admin)")}
          </button>
        </div>
      </div>

      {/* Floating Theme / Auth Quick Buttons */}
      <div className="fixed top-10 right-10 flex gap-6 z-50">
        <Link href="/login" className="px-12 py-5 bg-slate-dark/90 dark:bg-slate-800/60 backdrop-blur-2xl rounded-full text-xl font-black text-white border-2 border-white/10 hover:scale-105 active:scale-95 transition-all shadow-premium group flex items-center gap-3">
           <Zap className="w-6 h-6 fill-accent animate-pulse" />
           دخول الأبطال 🔍
        </Link>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 opacity-20 text-[10px] uppercase font-black tracking-widest pointer-events-none italic text-slate-dark">
         Developed with Excellence for CommuniKID Premium
      </div>
    </main>
  );
}
