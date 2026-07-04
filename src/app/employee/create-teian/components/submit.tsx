type Props = {
  disable: boolean;
};

export default function SubmitTeian({ disable }: Props) {
  return (
    <div className="flex gap-2">
      <button
        className={`flex-1 bg-primary text-white rounded-lg py-3 `}
        type="submit"
        name="status"
        value="DRAFT"
        // disabled={!disable}
      >
        Save as Draft
      </button>
      <button
        className={`flex-1 bg-primary text-white rounded-lg py-3 ${!disable ? "opacity-50 cursor-not-allowed" : ""}`}
        type="submit"
        name="status"
        value="SUBMITTED"
        disabled={!disable}
      >
        {disable ? "Submit" : "Loading"}
      </button>
    </div>
  );
}
