import { CheckCircle } from "lucide-react";
import CardComponents from "../components/card";

export default function AlertPage() {
  return (
    <div className="mb-20 space-y-2">
      <h1 className="text-2xl font-bold">Notification</h1>
      <div className="flex items-center justify-between text-xs">
        <p className="flex-1">Stay updated on your quality initiatives</p>
        <button className="text-blue-500">Mark all as read</button>
      </div>
      <div className="flex items-center justify-between border p-1 rounded-lg gap-1 text-xs">
        <button className="border flex-1 rounded-md p-1">All</button>
        <button className="border flex-1 rounded-md p-1">Unread</button>
      </div>
      <div className="space-y-2">
        <CardComponents className="flex items-stretch gap-2">
          <div className="p-1">
            <div className="border rounded-full p-1 bg-green-500 text-white">
              <CheckCircle />
            </div>
          </div>
          <div className="text-xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p>Teian Approved</p>
              <p>10m ago</p>
            </div>
            <p>
              Your proposal 'TN-327302-0212: Layout' has been aproved by Dimas
            </p>
          </div>
        </CardComponents>
        <CardComponents className="flex items-stretch gap-2">
          <div className="p-1">
            <div className="border rounded-full p-1 bg-green-500 text-white">
              <CheckCircle />
            </div>
          </div>
          <div className="text-xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p>Teian Approved</p>
              <p>10m ago</p>
            </div>
            <p>
              Your proposal 'TN-327302-0212: Layout' has been aproved by Dimas
            </p>
          </div>
        </CardComponents>
        <CardComponents className="flex items-stretch gap-2">
          <div className="p-1">
            <div className="border rounded-full p-1 bg-green-500 text-white">
              <CheckCircle />
            </div>
          </div>
          <div className="text-xs space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p>Teian Approved</p>
              <p>10m ago</p>
            </div>
            <p>
              Your proposal 'TN-327302-0212: Layout' has been aproved by Dimas
            </p>
          </div>
        </CardComponents>
      </div>
    </div>
  );
}
