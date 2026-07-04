import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { updateDepartement } from "../components/formActions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DepartementEditPaget({ params }: Props) {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const { id } = await params;
  const departement = await prisma.departement.findUnique({
    where: {
      id: id,
    },
  });
  return (
    <div className="text-black">
      <h1>Edit Departement</h1>
      <form action={updateDepartement}>
        <input type="hidden" name="departementId" defaultValue={id} required />
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={departement?.name}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
