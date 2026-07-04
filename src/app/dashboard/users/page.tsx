import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { createUser, deleteUser } from "./components/formAction";
import Link from "next/link";
import ConfirmDelete from "../components/confirmDelete";

export default async function UsersPage() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }

  // ambil data departement
  const departements = await prisma.departement.findMany({
    orderBy: {
      name: "asc",
    },
  });

  // ambil data user ambil dari api users

  const users = await prisma.user.findMany({
    include: {
      departement: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="">
      <h1>Users</h1>
      <div className="">
        <h1>Add User</h1>
        <form action={createUser}>
          <input type="text" name="nik" placeholder="Nik" required />
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="text" name="role" placeholder="Role" required />
          {/* <input
            type="text"
            name="departementId"
            placeholder="Departement ID"
          /> */}
          {/* pilihan untuk departement hasil ambil data departement */}
          <select name="departementId" required>
            <option value="">Select Departement</option>
            {departements.map((departement) => (
              <option key={departement.id} value={departement.id}>
                {departement.name}
              </option>
            ))}
          </select>
          <button type="submit">Add User</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nik</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Departement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nik}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.departement?.name || "N/A"}</td>
              <td>
                <Link
                  href={`/dashboard/users/${user.id}`}
                  className="border bg-green-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </Link>
                <form
                  action={deleteUser.bind(null, user.id)}
                  className="inline"
                >
                  <ConfirmDelete />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
