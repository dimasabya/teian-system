"use client";

import { useState } from "react";
import ImageUpload from "./img-upload";

type UploadStatus = {
  before: boolean;
  after: boolean;
};

type BasicInfoProps = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setUploadStatus: React.Dispatch<React.SetStateAction<UploadStatus>>;
};

export default function ProblemSolution({
  formData,
  setFormData,
  setUploadStatus,
}: BasicInfoProps) {
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  return (
    <section className="border border-border rounded-lg p-4 bg-bg-border">
      <h2 className="font-semibold mb-4">Problem &amp; Solution</h2>
      <div className="space-y-4">
        <div className="border border-border rounded-md p-2">
          <h3 className="text-sm font-semibold">Before</h3>
          <label className="text-sm">Current Problem</label>
          <textarea
            name="problem"
            id=""
            rows={5}
            className="w-full mt-1 border border-border rounded-md p-2"
            value={formData.problem}
            onChange={(e) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                problem: e.target.value,
              }))
            }
          ></textarea>
          <h2 className="font-semibold mb-4 text-sm">Foto Before</h2>

          <ImageUpload
            type="before"
            name="beforeImage"
            preview={beforeImage}
            setPreview={setBeforeImage}
            setUploadStatus={setUploadStatus}
            onFileChange={(url) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                beforeImage: url,
              }))
            }
          />

          <input
            type="hidden"
            name="beforeImage"
            value={formData.beforeImage ?? ""}
          />
        </div>
        <div className="border border-border rounded-md p-2">
          <h3 className="text-sm font-semibold">After</h3>
          <label className="text-sm">Proposed Improvement</label>
          <textarea
            name="improvement"
            id=""
            rows={5}
            className="w-full mt-1 border border-border rounded-md p-2"
            value={formData.improvement}
            onChange={(e) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                improvement: e.target.value,
              }))
            }
          ></textarea>
          <h2 className="font-semibold mb-4 text-sm">Foto After</h2>

          <ImageUpload
            type="after"
            name="afterImage"
            preview={afterImage}
            setPreview={setAfterImage}
            setUploadStatus={setUploadStatus}
            onFileChange={(url) =>
              setFormData((prev: typeof formData) => ({
                ...prev,
                afterImage: url,
              }))
            }
          />

          <input
            type="hidden"
            name="afterImage"
            value={formData.afterImage ?? ""}
          />
        </div>
      </div>
    </section>
  );
}
