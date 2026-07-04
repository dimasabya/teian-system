"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createDepartement(formData: FormData) {
  await prisma.departement.create({
    data: {
      name: formData.get("name") as string,
    },
  });
  revalidatePath("/dashboard/departements");
}

export async function updateDepartement(formData: FormData) {
  const departementId = formData.get("departementId") as string;
  await prisma.departement.update({
    where: {
      id: departementId,
    },
    data: {
      name: formData.get("name") as string,
    },
  });

  revalidatePath("/dashboard/departements");

  redirect("/dashboard/departements");
}

export async function deleteDepartement(departementId: string) {
  await prisma.departement.delete({
    where: {
      id: departementId,
    },
  });
  revalidatePath("/dashboard/departements");
}
