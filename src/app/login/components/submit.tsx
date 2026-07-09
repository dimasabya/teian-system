"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function ButtonSubmitLogin() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-primary py-2 text-white disabled:opacity-60"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Signing in...
        </span>
      ) : (
        "Login"
      )}
    </button>
  );
}
