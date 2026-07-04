"use client";

import { useState } from "react";
import BasicInfo from "./basic-info";
import ProblemSolution from "./problem-solution";
import ProgressStepper from "./progress-steper";
import SubmitTeian from "./submit";
import { createTeian } from "./formAction";

type UserProps = {
  id?: string;
  nik?: string;
  name?: string;
  departement?: {
    id: string;
    name: string;
  } | null;
};

export default function FormTeian({ user }: { user: UserProps }) {
  const [uploadStatus, setUploadStatus] = useState({
    after: false,
    before: false,
  });

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    klasifikasi: "",
    departementId: user.departement?.id ?? "",
    problem: "",
    improvement: "",
    estimatedSaving: "",
    beforeImage: "",
    afterImage: "",
  });

  const complitedUploadImg = Boolean(
    formData.beforeImage &&
    formData.afterImage &&
    !uploadStatus.after &&
    !uploadStatus.before,
  );

  const step1Completed = Boolean(
    formData.title &&
    formData.category &&
    formData.departementId &&
    formData.klasifikasi,
  );

  const step2Completed = Boolean(
    formData.problem && formData.improvement,
    // formData.beforeImage &&
    // formData.afterImage,
  );

  const step3Completed = Boolean(formData.estimatedSaving);

  const step4Completed = Boolean(formData.beforeImage && formData.afterImage);

  return (
    <>
      <ProgressStepper
        step1={step1Completed}
        step2={step2Completed}
        step3={step3Completed}
        step4={step4Completed}
      />
      <form action={createTeian} className="space-y-4 mt-6">
        <BasicInfo
          formData={formData}
          setFormData={setFormData}
          departement={user?.departement!}
        />
        <ProblemSolution
          formData={formData}
          setFormData={setFormData}
          setUploadStatus={setUploadStatus}
        />
        <SubmitTeian disable={complitedUploadImg} />
      </form>
    </>
  );
}
