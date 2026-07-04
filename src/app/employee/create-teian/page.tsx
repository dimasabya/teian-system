import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import FormTeian from "./components/form";

export default async function CreateTeianPage() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
    include: {
      departement: true,
    },
  });

  const userData = {
    id: user?.id,
    name: user?.name,
    nik: user?.nik,
    departement: user?.departement,
  };

  return (
    <div className="mb-22 space-y-4">
      <h1>Submit New Teian</h1>

      <FormTeian user={userData} />
    </div>
  );
}
