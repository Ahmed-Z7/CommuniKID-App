import Link from "next/link";
import { db } from "@/lib/db";
import { categories as categoriesTable } from "@/lib/db/schema";

export default async function ParentHome() {
  const dbCategories = await db.select().from(categoriesTable);

  // Fallback if DB is empty (while seeding is in progress)
  const categories = dbCategories.length > 0 ? dbCategories : [
    { id: 1, name: "حيوانات", icon: "🦁" },
    { id: 2, name: "فواكه", icon: "🍎" },
    { id: 3, name: "مشاعر", icon: "😊" },
    { id: 4, name: "أفعال", icon: "🏃‍♂️" },
    { id: 5, name: "ألوان", icon: "🎨" },
    { id: 6, name: "أرقام", icon: "🔢" },
    { id: 7, name: "جسمي", icon: "🧒" },
    { id: 8, name: "المنزل", icon: "🏠" },
    { id: 9, name: "المدرسة", icon: "🎒" },
    { id: 10, name: "طبيعة", icon: "🌳" },
  ];

  const colors = [
    { bg: "bg-blue", text: "text-blue", light: "bg-blue/10" },
    { bg: "bg-coral", text: "text-coral", light: "bg-coral/10" },
    { bg: "bg-accent", text: "text-accent", light: "bg-accent/10" },
    { bg: "bg-sage", text: "text-sage", light: "bg-sage/10" },
    { bg: "bg-orange", text: "text-orange", light: "bg-orange/10" },
  ];

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg flex flex-col pb-40 font-bold transition-colors duration-500">
      {/* Header with Child Avatar info */}
      <header className="p-8 pb-12 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-b-[4rem] shadow-premium mb-10 border-b border-white/20">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-[2rem] bg-white shadow-premium flex items-center justify-center text-4xl border-2 border-white animate-float">
            🦸‍♂️
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-dark dark:text-white mb-2">أهلاً يا بطل! 🌟</h1>
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-accent text-slate-dark rounded-full text-xs font-black shadow-soft">المستوى 3</span>
              <span className="text-sm text-slate-dark/60 dark:text-slate-400">120 ⭐️ نقطة تميز</span>
            </div>
          </div>
        </div>
        <button className="w-16 h-16 glass-card rounded-3xl flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all shadow-premium">
          🔔
        </button>
      </header>

      {/* Categories Grid */}
      <main className="flex-1 px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12 px-2">
          <h2 className="text-4xl font-black text-slate-dark dark:text-white italic tracking-tight">اختار التصنيف 📚</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => {
            const color = colors[i % colors.length];
            return (
              <Link 
                key={cat.id} 
                href={`/parent/category/${cat.id}`}
                className="group card-mountain h-80 flex flex-col items-center shadow-premium"
              >
                {/* Mountain Top Part */}
                <div className={`w-full h-1/2 ${color.bg} relative flex items-center justify-center transition-transform group-hover:scale-110 duration-700`}>
                   {/* Curved Shape Overlay */}
                   <div className="absolute -bottom-1 left-0 right-0 h-12 bg-white dark:bg-slate-800 rounded-t-[3rem]" />
                   <div className="text-8xl drop-shadow-2xl z-10 transition-transform group-hover:rotate-12 duration-500">
                     {cat.icon}
                   </div>
                </div>
                
                {/* White Bottom Part */}
                <div className="w-full h-1/2 bg-white dark:bg-slate-800 flex items-center justify-center p-6 text-center">
                  <span className="text-3xl font-black text-slate-dark/80 dark:text-white transition-all group-hover:tracking-wider group-hover:text-primary">
                    {cat.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Bottom Navigation (Floating Premium Slate Pill) */}
      <nav className="nav-pill-slate">
        <Link href="/parent/home" className="flex flex-col items-center p-3 text-white group relative">
          <div className="absolute -top-16 w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-3xl shadow-glow-coral border-4 border-slate-dark translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            🏠
          </div>
          <span className="text-[11px] font-black mt-8 uppercase tracking-widest text-accent">الرئيسية</span>
        </Link>
        <Link href="/parent/progress" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📈</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">التقدم</span>
        </Link>
        <div className="w-16 h-16 flex items-center justify-center">
            <Link href="/parent/add-card" className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-premium text-slate-dark text-4xl font-black border-4 border-slate-dark transform hover:scale-110 active:scale-90 transition-all">
               +
            </Link>
        </div>
        <Link href="/parent/avatar" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🤵</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">الأفاتار</span>
        </Link>
        <Link href="/parent/profile" className="flex flex-col items-center p-3 text-white/40 hover:text-white group transition-all">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">⚙️</span>
          <span className="text-[11px] font-black mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">حسابي</span>
        </Link>
      </nav>
    </div>
  );
}
