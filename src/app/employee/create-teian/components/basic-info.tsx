import React from "react";

type BasicInfoProps = {
  departement: {
    id: string;
    name: string;
  };
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function BasicInfo({
  departement,
  formData,
  setFormData,
}: BasicInfoProps) {
  return (
    <section className="border border-border rounded-lg p-4 bg-bg-border">
      <h2 className="font-semibold mb-4">Basic Info</h2>

      <div className="space-y-4">
        <div className="">
          <label className="text-sm">Teian Title</label>
          <input
            type="text"
            className="w-full mt-1 border border-border rounded p-2"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="">
          <label className="text-sm">Category</label>
          <select
            name="category"
            id="category"
            className="w-full mt-1 border border-border rounded p-2"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            <option value=""></option>
            <option value="5R">5R</option>
            <option value="Safety">Safety</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm">Klasifikasi</label>
          <select
            name="klasifikasi"
            id="klasifikasi"
            className="w-full mt-1 border border-border rounded p-2"
            value={formData.klasifikasi}
            onChange={(e) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                klasifikasi: e.target.value,
              }))
            }
          >
            <option value=""></option>
            <option value="Pengetahuan Umum">Pengetahuan Umum</option>
            <option value="Penyelesaian Masalah">Penyelesaian Masalah</option>
          </select>
        </div>
        <div className="">
          <label className="text-sm">Departement</label>
          <input
            type="text"
            defaultValue={departement.name}
            disabled
            className="w-full mt-1 border border-border rounded p-2"
            name="departementId"
          />
        </div>
      </div>
    </section>
  );
}
