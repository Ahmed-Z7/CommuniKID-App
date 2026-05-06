import { db } from "./index";
import { categories, cards, users } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // 1. Create a default admin/therapist user if not exists
  const [admin] = await db.insert(users).values({
    name: "مساعد كوم-أون",
    email: "admin@communikid.com",
    password: "adminp@ssword",
    role: "therapist",
    specialization: "تخاطب عام",
  }).onConflictDoNothing().returning();

  const creatorId = admin?.id || 1;

  const demoCategories = [
    { name: "حيوانات", icon: "🦁" },
    { name: "فواكه", icon: "🍎" },
    { name: "مشاعر", icon: "😊" },
    { name: "أفعال", icon: "🏃‍♂️" },
    { name: "ألوان", icon: "🎨" },
    { name: "أرقام", icon: "🔢" },
    { name: "جسمي", icon: "🧒" },
    { name: "المنزل", icon: "🏠" },
    { name: "المدرسة", icon: "🎒" },
    { name: "طبيعة", icon: "🌳" },
  ];

  console.log("Creating categories...");
  const insertedCats = await db.insert(categories).values(demoCategories).returning();

  const cardsData = [
    // Animals
    { categoryId: insertedCats[0].id, wordAr: "أسد", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616412.png", createdBy: creatorId },
    { categoryId: insertedCats[0].id, wordAr: "فيل", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616430.png", createdBy: creatorId },
    { categoryId: insertedCats[0].id, wordAr: "قطة", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616432.png", createdBy: creatorId },
    { categoryId: insertedCats[0].id, wordAr: "كلب", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png", createdBy: creatorId },
    { categoryId: insertedCats[0].id, wordAr: "عصفور", imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616428.png", createdBy: creatorId },

    // Fruits
    { categoryId: insertedCats[1].id, wordAr: "تفاحة", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415682.png", createdBy: creatorId },
    { categoryId: insertedCats[1].id, wordAr: "موزة", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415733.png", createdBy: creatorId },
    { categoryId: insertedCats[1].id, wordAr: "برتقالة", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415744.png", createdBy: creatorId },
    { categoryId: insertedCats[1].id, wordAr: "فراولة", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415757.png", createdBy: creatorId },
    { categoryId: insertedCats[1].id, wordAr: "عنب", imageUrl: "https://cdn-icons-png.flaticon.com/512/415/415731.png", createdBy: creatorId },

    // Emotions
    { categoryId: insertedCats[2].id, wordAr: "سعيد", imageUrl: "https://cdn-icons-png.flaticon.com/512/742/742751.png", createdBy: creatorId },
    { categoryId: insertedCats[2].id, wordAr: "حزين", imageUrl: "https://cdn-icons-png.flaticon.com/512/742/742752.png", createdBy: creatorId },
    { categoryId: insertedCats[2].id, wordAr: "غاضب", imageUrl: "https://cdn-icons-png.flaticon.com/512/742/742754.png", createdBy: creatorId },
    { categoryId: insertedCats[2].id, wordAr: "مندهش", imageUrl: "https://cdn-icons-png.flaticon.com/512/742/742761.png", createdBy: creatorId },
    { categoryId: insertedCats[2].id, wordAr: "خائف", imageUrl: "https://cdn-icons-png.flaticon.com/512/742/742765.png", createdBy: creatorId },

    // Actions (simplified list for seeding)
    { categoryId: insertedCats[3].id, wordAr: "يجري", imageUrl: "https://cdn-icons-png.flaticon.com/512/1039/1039401.png", createdBy: creatorId },
    { categoryId: insertedCats[3].id, wordAr: "يأكل", imageUrl: "https://cdn-icons-png.flaticon.com/512/1039/1039412.png", createdBy: creatorId },
    { categoryId: insertedCats[3].id, wordAr: "يشرب", imageUrl: "https://cdn-icons-png.flaticon.com/512/1039/1039415.png", createdBy: creatorId },
    { categoryId: insertedCats[3].id, wordAr: "ينام", imageUrl: "https://cdn-icons-png.flaticon.com/512/1039/1039420.png", createdBy: creatorId },
    { categoryId: insertedCats[3].id, wordAr: "يلعب", imageUrl: "https://cdn-icons-png.flaticon.com/512/1039/1039405.png", createdBy: creatorId },
  ];

  // Fill in other categories with placeholders for now to reach 50
  for (let i = 4; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      cardsData.push({
        categoryId: insertedCats[i].id,
        wordAr: `${insertedCats[i].name} ${j + 1}`,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2822/2822361.png",
        createdBy: creatorId,
      });
    }
  }

  console.log("Creating cards...");
  await db.insert(cards).values(cardsData);

  console.log("✅ Seeding complete!");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seeding failed:", e);
  process.exit(1);
});
