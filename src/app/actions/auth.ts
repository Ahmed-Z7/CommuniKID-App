"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

/**
 * TODO: SECURITY - Passwords are currently stored in plain text.
 * Implement bcrypt hashing for passwords before production deployment.
 */

export async function therapistSignupAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const gender = formData.get("gender") as "male" | "female";
  const specialization = formData.get("specialization") as string;

  let success = false;
  try {
    // Check if user exists
    const existing = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existing) {
      console.log("User already exists");
      return { error: "البريد الإلكتروني مسجل بالفعل" };
    }

    await db.insert(users).values({
      name,
      email,
      password, // TODO: Hash password
      role: "therapist",
      gender,
      specialization,
    });
    success = true;
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة لاحقاً" };
  }

  if (success) {
    redirect("/therapist/dashboard");
  }
}

export async function parentSignupAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const childName = formData.get("childName") as string;
  const childAge = parseInt(formData.get("childAge") as string);
  const childGender = formData.get("childGender") as "male" | "female";
  const condition = formData.get("condition") as "autism" | "speech_delay";

  let success = false;
  try {
    const existing = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existing) {
      return { error: "البريد الإلكتروني مسجل بالفعل" };
    }

    await db.insert(users).values({
      name: `والد ${childName}`,
      email,
      password, // TODO: Hash password
      role: "parent",
      childName,
      childAge,
      childGender,
      condition,
    });
    success = true;
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "حدث خطأ أثناء إنشاء الحساب" };
  }

  if (success) {
    redirect("/parent/home");
  }
}

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let userRole: string | null = null;
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq, and }) => and(eq(users.email, email), eq(users.password, password)),
    });

    if (user) {
      userRole = user.role;
    } else {
      return { error: "بيانات الدخول غير صحيحة" };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { error: "حدث خطأ أثناء تسجيل الدخول" };
  }

  if (userRole === "therapist") {
    redirect("/therapist/dashboard");
  } else if (userRole === "parent") {
    redirect("/parent/home");
  }
}
