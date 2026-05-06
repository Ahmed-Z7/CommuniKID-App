"use server";

import { db } from "@/lib/db";
import { categories, cards } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function seedDatabaseAction() {
  try {
    // Check if categories already exist
    const existingCategories = await db.select().from(categories);
    if (existingCategories.length > 0) {
      return { message: "Database already has data. Skipping seed." };
    }

    console.log("Seeding started...");

    // 1. Insert Categories
    const categoryData = [
      { name: "حيوانات 🦁", description: "تعرف على أصدقائنا من عالم الحيوان", icon: "🦁" },
      { name: "فواكه 🍎", description: "أشهى الفواكه الصحية والمفيدة", icon: "🍎" },
      { name: "مشاعر 😊", description: "كيف نعبر عن ما نشعر به؟", icon: "😊" },
      { name: "أفعال 🏃", description: "هيا نتحرك ونفعل أشياء جميلة", icon: "🏃" },
      { name: "ألوان 🎨", description: "عالمنا مليء بالألوان الرائعة", icon: "🎨" },
      { name: "أرقام 🔢", description: "هيا نتعلم العد سوياً", icon: "🔢" },
      { name: "أدوات 🛠", description: "الأشياء التي نستخدمها في يومنا", icon: "🛠" },
      { name: "ملابس 👕", description: "ماذا نرتدي اليوم؟", icon: "👕" },
      { name: "خضروات 🥦", description: "أكل صحي وقوي للجميع", icon: "🥦" },
      { name: "وسائل مواصلات 🚗", description: "كيف ننتقل من مكان لآخر؟", icon: "🚗" },
    ];

    const insertedCategories = await db.insert(categories).values(categoryData).returning();

    // 2. Insert Cards for each category
    const cardsData = [];
    for (const cat of insertedCategories) {
      if (cat.name.includes("حيوانات")) {
        cardsData.push(
          { categoryId: cat.id, name: "أسد", imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "أسد" },
          { categoryId: cat.id, name: "فيل", imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "فيل" },
          { categoryId: cat.id, name: "قطة", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "قطة" }
        );
      } else if (cat.name.includes("فواكه")) {
        cardsData.push(
          { categoryId: cat.id, name: "تفاحة", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "تفاحة" },
          { categoryId: cat.id, name: "موز", imageUrl: "https://images.unsplash.com/photo-1571771894821-ad996211fdf4?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "موز" }
        );
      } else if (cat.name.includes("أفعال")) {
        cardsData.push(
          { categoryId: cat.id, name: "يجري", imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "يجري" },
          { categoryId: cat.id, name: "يأكل", imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=300&h=300&fit=crop", audioUrl: "", pronunciation: "يأكل" }
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
