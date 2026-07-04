"use server";

import { prisma } from "@/lib/prisma";
import bycrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  const password = formData.get("password") as string;
  const hashedPassword = await bycrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      nik: formData.get("nik") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: hashedPassword,
      role: formData.get("role") as any,
      departementId: formData.get("departementId") as string,
    },
  });

  revalidatePath("/dashboard/users");
}

export async function deleteUser(userId: string) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  revalidatePath("/dashboard/users");
}

export async function updateUser(formData: FormData) {
  const userId = formData.get("userId") as string;
  const password = formData.get("password") as string;
  const hashedPassword = await bycrypt.hash(password, 10);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      nik: formData.get("nik") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: hashedPassword,
      role: formData.get("role") as any,
      departementId: formData.get("departementId") as string,
    },
  });
  revalidatePath("/dashboard/users");

  redirect("/dashboard/users");
}
