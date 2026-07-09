import { signinAction } from "../dashboard/action";
import ButtonSubmitLogin from "./components/submit";

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background text-black p-8">
      <div className="w-full max-w-md rounded-xl border border-border bg-secondary p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold">TEIAN SYSTEM</h1>

        <form action={signinAction} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Email</label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">Password</label>

            <input
              type="password"
              name="password"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-2"
            />
          </div>

          <ButtonSubmitLogin />
        </form>
      </div>
    </div>
  );
}
