"use server";

import { db } from "@/lib/db";
import { categories, cards, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function seedDatabaseAction() {
  try {
    // Check if categories already exist
    const existingCategories = await db.select().from(categories);
    if (existingCategories.length > 0) {
      return { message: "Database already has data. Skipping seed." };
    }

    console.log("Seeding started...");

    // 1. Insert a system seed user to satisfy the required createdBy FK
    const existingSeedUser = await db.select().from(users).where(eq(users.email, "seed@system.local"));
    let seedUserId: number;
    if (existingSeedUser.length > 0) {
      seedUserId = existingSeedUser[0].id;
    } else {
      const [seedUser] = await db.insert(users).values({
        name: "System Seed",
        email: "seed@system.local",
        password: "not-a-real-password",
        role: "parent",
      }).returning();
      seedUserId = seedUser.id;
    }

    // 2. Insert Categories (schema has no description column)
    const categoryData = [
      { name: "حيوانات 🦁", icon: "🦁" },
      { name: "فواكه 🍎", icon: "🍎" },
      { name: "مشاعر 😊", icon: "😊" },
      { name: "أفعال 🏃", icon: "🏃" },
      { name: "ألوان 🎨", icon: "🎨" },
      { name: "أرقام 🔢", icon: "🔢" },
      { name: "أدوات 🛠", icon: "🛠" },
      { name: "ملابس 👕", icon: "👕" },
      { name: "خضروات 🥦", icon: "🥦" },
      { name: "وسائل مواصلات 🚗", icon: "🚗" },
    ];

    const insertedCategories = await db.insert(categories).values(categoryData).returning();

    // 3. Insert Cards — use wordAr (matches schema), include required createdBy
    const cardsData: { categoryId: number; wordAr: string; imageUrl: string; audioUrl: string; createdBy: number }[] = [];
    for (const cat of insertedCategories) {
      if (cat.name.includes("حيوانات")) {
        cardsData.push(
          { categoryId: cat.id, wordAr: "أسد", imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId },
          { categoryId: cat.id, wordAr: "فيل", imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId },
          { categoryId: cat.id, wordAr: "قطة", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId }
        );
      } else if (cat.name.includes("فواكه")) {
        cardsData.push(
          { categoryId: cat.id, wordAr: "تفاحة", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId },
          { categoryId: cat.id, wordAr: "موز", imageUrl: "https://images.unsplash.com/photo-1571771894821-ad996211fdf4?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId }
        );
      } else if (cat.name.includes("أفعال")) {
        cardsData.push(
          { categoryId: cat.id, wordAr: "يجري", imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId },
          { categoryId: cat.id, wordAr: "يأكل", imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=300&h=300&fit=crop", audioUrl: "", createdBy: seedUserId }
        );
      }
    }

    if (cardsData.length > 0) {
      await db.insert(cards).values(cardsData);
    }

    return { message: "Seeding completed successfully! 🚀" };
  } catch (error) {
    console.error("Seeding error:", error);
    return { error: "حدث خطأ أثناء تهيئة البيانات" };
  }
}
