import { unstable_cache } from "next/cache";
import { prisma } from "../prisma";

export const getMyTeian = unstable_cache(
  async (
    userId: string,
    options?: {
      take?: number;
    },
  ) => {
    console.log("🔥 QUERY DATABASE getMyTeian");

    return prisma.teian.findMany({
      where: {
        creatorId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: options?.take,
    });
  },
  [""],
  {
    tags: ["my-teian"],
  },
);

export const getTeianById = unstable_cache(
  async (id: string) => {
    console.log("🔥 QUERY DATABASE getTeianById");

    return prisma.teian.findUnique({
      where: {
        id: id,
      },
      include: {
        creator: true,
        departement: true,
        attachments: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        approvals: {
          include: {
            user: true,
          },
        },
        trackings: {
          include: {
            createdby: true,
          },
        },
      },
    });
  },
  [""],
  {
    tags: ["my-teian"],
  },
);
