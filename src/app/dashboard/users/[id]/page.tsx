import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { updateUser } from "../components/formAction";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function editPage({ params }: Props) {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const departements = await prisma.departement.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const { id } = await params;
  console.log("ini", id);
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <div className="">
      <h1>Edit User</h1>
      <form action={updateUser}>
        <input type="hidden" name="userId" defaultValue={user?.id} required />
        <input
          type="text"
          name="nik"
          placeholder="Nik"
          defaultValue={user?.nik}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user?.name}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={user?.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          defaultValue={user?.role}
        />
        <select
          name="departementId"
          defaultValue={user?.departementId ?? ""}
          required
        >
          <option value="">Select Departement</option>
          {departements.map((departement) => (
            <option key={departement.id} value={departement.id}>
              {departement.name}
            </option>
          ))}
        </select>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
