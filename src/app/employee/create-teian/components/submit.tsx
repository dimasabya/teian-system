import { useState } from "react";

type Props = {
  disable: boolean;
};

export default function SubmitTeian({ disable }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex gap-2">
      <button
        className={`flex-1 bg-[#64748B] text-white rounded-lg py-3 `}
        type="submit"
        name="status"
        value="DRAFT"
        // disabled={!disable}
      >
        Save as Draft
      </button>
      <button
        className={`flex-1 bg-primary text-white rounded-lg py-3 ${!disable ? "opacity-50 cursor-not-allowed" : ""} ${isLoading ? "bg-primary-active opacity-100" : ""}`}
        type="submit"
        name="status"
        value="SUBMITTED"
        disabled={!disable}
        onClick={() => setIsLoading(!isLoading)}
      >
        {!disable ? "Loading" : !isLoading ? "Submit" : "Submitting..."}
      </button>
    </div>
  );
}
