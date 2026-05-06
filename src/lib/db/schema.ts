import { pgTable, serial, text, integer, timestamp, boolean, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["therapist", "parent"]);
export const genderEnum = pgEnum("gender", ["male", "female"]);
export const conditionEnum = pgEnum("condition", ["autism", "speech_delay"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: roleEnum("role").notNull(),
  gender: genderEnum("gender"),
  specialization: text("specialization"), // For Therapists
  childName: text("child_name"), // For Parents
  childAge: integer("child_age"), // For Parents
  childGender: genderEnum("child_gender"), // For Parents
  condition: conditionEnum("condition"), // For Parents
  createdAt: timestamp("created_at").defaultNow(),
});

export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  therapistId: integer("therapist_id").references(() => users.id).notNull(),
  parentId: integer("parent_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon"), // Emoji or icon name
  createdAt: timestamp("created_at").defaultNow(),
});

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").references(() => categories.id).notNull(),
  wordAr: text("word_ar").notNull(),
  imageUrl: text("image_url"),
  audioUrl: text("audio_url"),
  createdBy: integer("created_by").references(() => users.id).notNull(),
  isAiGenerated: boolean("is_ai_generated").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const progress = pgTable("progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(), // Parent/Child context
  cardId: integer("card_id").references(() => cards.id).notNull(),
  isCorrect: boolean("is_correct").notNull(),
  attemptDate: timestamp("attempt_date").defaultNow(),
  audioUrl: text("audio_url"), // Child's recording
});
