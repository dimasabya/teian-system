import { logoutAction } from "../action";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="flex-1 flex items-center gap-4 bg-red-200 justify-between">
        <div className="">
          <h1 className="inline-block space-x-3 mr-10">TEIAN SYSTEM</h1>
          <input type="text" placeholder="Search..." className="" />
        </div>
        <div className="">
          <button>Notifications</button>
          <button>?</button>
          <button>setting</button>
          <form action={logoutAction}>
            <button>Logout</button>
          </form>
        </div>
      </div>
      <div className="">
        <button>profile</button>
      </div>
    </div>
  );
}
