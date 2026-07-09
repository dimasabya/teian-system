"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { generateTeianNumber } from "./generateTeianNumber";

type createTeianProps = {
  title: string;
  category: string;
  klasifikasi: string;
  departmentId: string;
  problem: string;
  improvement: string;
  estimatedSaving: string;
  beforeImage: File | null;
  afterImage: File | null;
};

export async function createTeian(formData: FormData) {
  try {
    const session = await auth();

    if (!session?.user.id) {
      throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        departement: true,
      },
    });

    const status = formData.get("status") as "DRAFT" | "SUBMITTED";

    if (status === "SUBMITTED") {
      if (
        !formData.get("title") ||
        !formData.get("category") ||
        !formData.get("klasifikasi") ||
        !formData.get("problem") ||
        !formData.get("improvement") ||
        !formData.get("beforeImage") ||
        !formData.get("afterImage")
      ) {
        throw new Error("Lengkapi seluruh data sebelum Submit");
      }
    }

    let teianNumber: string | null = null;

    if (status === "SUBMITTED") {
      teianNumber = await generateTeianNumber();
    }

    const teian = await prisma.teian.create({
      data: {
        teianNumber,
        status,
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        klasifikasi: formData.get("klasifikasi") as string,
        problem: formData.get("problem") as string,
        improvement: formData.get("improvement") as string,
        //   departementId: formData.get("departementId") as string,
        //   creatorId: session.user.id,
        creator: {
          connect: {
            id: session.user.id,
          },
        },
        departement: {
          connect: {
            id: user?.departement?.id,
          },
        },
      },
    });

    await prisma.attachment.create({
      data: {
        imgBefore: formData.get("beforeImage") as string,
        imgAfter: formData.get("afterImage") as string,
        teian: {
          connect: {
            id: teian.id,
          },
        },
      },
    });

    if (status === "SUBMITTED") {
      await prisma.teianTracking.create({
        data: {
          step: "SUBMITTED",
          status: "APPROVED",
          note: "Teian berhasil dikirim ke atasan untuk ditinjau",
          teian: {
            connect: {
              id: teian.id,
            },
          },
          createdby: {
            connect: {
              id: session.user.id,
            },
          },
        },
      });
    }

    // await prisma.$transaction(async (tx) => {
    //   const teian = await tx.teian.create({
    //     data: {
    //       teianNumber,
    //       status,
    //       title: formData.get("title") as string,
    //       category: formData.get("category") as string,
    //       klasifikasi: formData.get("klasifikasi") as string,
    //       problem: formData.get("problem") as string,
    //       improvement: formData.get("improvement") as string,
    //       //   departementId: formData.get("departementId") as string,
    //       //   creatorId: session.user.id,
    //       creator: {
    //         connect: {
    //           id: session.user.id,
    //         },
    //       },

    //       departement: {
    //         connect: {
    //           id: user?.departement?.id,
    //         },
    //       },
    //     },
    //   });

    //   await tx.attachment.create({
    //     data: {
    //       imgBefore: formData.get("beforeImage") as string,
    //       imgAfter: formData.get("afterImage") as string,

    //       teian: {
    //         connect: {
    //           id: teian.id,
    //         },
    //       },
    //     },
    //   });

    //   if (status === "SUBMITTED") {
    //     await tx.teianTracking.create({
    //       data: {
    //         step: "SUBMITTED",
    //         status: "APPROVED",
    //         note: "Teian berhasil dikirim ke atasan untuk ditinjau",
    //         teian: {
    //           connect: {
    //             id: teian.id,
    //           },
    //         },
    //         createdby: {
    //           connect: {
    //             id: session.user.id,
    //           },
    //         },
    //       },
    //     });
    //   }
    // });

    revalidatePath(`/employee/teian`);
    revalidateTag("my-teian", "max");
    revalidateTag("dashboard-stats", "max");
    redirect(`/employee/teian`);
  } catch (error) {
    console.error("CREATE TEIAN ERROR:", error);
    throw error;
  }
}
