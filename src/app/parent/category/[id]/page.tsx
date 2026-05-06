import { db } from "@/lib/db";
import { cards, categories } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { CategoryCardList } from "./CategoryCardList";
import Link from "next/link";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params;
  const categoryId = parseInt(awaitedParams.id);
  
  const category = await db.query.categories.findFirst({
    where: eq(categories.id, categoryId),
  });

  const categoryCards = await db.select().from(cards).where(eq(cards.categoryId, categoryId));

  if (!category) {
    return <div>التصنيف غير موجود</div>;
  }

  return (
    <div className="min-h-screen bg-soft-bg dark:bg-dark-bg p-8 pb-40 transition-colors duration-500 max-w-7xl mx-auto w-full">
      <header className="flex items-center gap-8 mb-16 bg-white/40 dark:bg-slate-900/40 p-10 rounded-[4rem] border border-white/60 shadow-premium backdrop-blur-xl">
        <Link href="/parent/home" className="w-16 h-16 glass-card rounded-3xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all shadow-premium">
          ⬅️
        </Link>
        <div>
          <h1 className="text-5xl font-black text-slate-dark dark:text-white flex items-center gap-6 tracking-tighter">
            <span className="text-7xl drop-shadow-lg">{category.icon}</span>
            {category.name}
          </h1>
          <p className="text-slate-dark/50 dark:text-slate-400 font-bold mt-2 text-xl italic">تعلّم كلمات جديدة وممتعة! ✨</p>
        </div>
      </header>

      <CategoryCardList cards={categoryCards} />

      {/* Floating Home Button for mobile */}
      <Link 
        href="/parent/home"
        className="fixed bottom-10 left-10 w-20 h-20 bg-slate-dark text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-premium lg:hidden z-50 hover:scale-110 active:scale-95 transition-all border-4 border-white/20"
      >
        🏠
      </Link>
    </div>
  );
}
