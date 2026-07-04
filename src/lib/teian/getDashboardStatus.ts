import { unstable_cache } from "next/cache";
import { prisma } from "../prisma";

export const getDashboardStats = unstable_cache(
  async (userId: string) => {
    const result = await prisma.teian.groupBy({
      by: ["status"],
      where: {
        creatorId: userId,
      },
      _count: {
        status: true,
      },
    });

    return {
      draft: result.find((item) => item.status === "DRAFT")?._count.status || 0,
      submitted:
        result.find((item) => item.status === "SUBMITTED")?._count.status || 0,
      approved:
        result.find((item) => item.status === "APPROVED")?._count.status || 0,
      rejected:
        result.find((item) => item.status === "REJECTED")?._count.status || 0,
    };
  },
  [],
  {
    tags: ["dashboard-stats"],
  },
);
