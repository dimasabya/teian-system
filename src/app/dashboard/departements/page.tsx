import Link from "next/link";
import { createDepartement, deleteDepartement } from "./components/formActions";
import { prisma } from "@/lib/prisma";
import ConfirmDelete from "../components/confirmDelete";

export default async function DepartmentPage() {
  const fetchDepartements = await prisma.departement.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Department Management</h1>

      <form action={createDepartement} className="flex gap-2 mb-6">
        <input
          name="name"
          placeholder="Department Name"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <table className="border w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {fetchDepartements.map((dept: any) => (
            <tr key={dept.id}>
              <td className="border p-2">{dept.name}</td>
              <td className="border p-2">
                <form
                  action={deleteDepartement.bind(null, dept.id)}
                  className="inline-block"
                >
                  <ConfirmDelete />
                </form>
                <Link
                  href={`/dashboard/departements/${dept.id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
