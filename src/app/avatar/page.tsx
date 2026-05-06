import { redirect } from "next/navigation";

export default function RedirectToAvatar() {
  redirect("/parent/avatar");
}
