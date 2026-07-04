"use server";

import { signIn, signOut } from "@/auth";

export async function signinAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
}

export async function logoutAction() {
  await signOut({
    redirectTo: "/login",
  });
}
