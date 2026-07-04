import { formatDate } from "@/lib/utils/formatDate";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type Tracking = {
  step: string;
  createdAt?: Date;
};

type props = {
  trackings: Tracking[];
};

const workflow = [
  {
    key: "SUBMITTED",
    label: "Submitted",
  },
  {
    key: "LEADER_REVIEW",
    label: "Leader Review",
  },
  {
    key: "TQM_REVIEW",
    label: "TQM Review",
  },
  {
    key: "VERIFICATION",
    label: "Verification",
  },
  {
    key: "COMPLETED",
    label: "Completed",
  },
];

export default function TrackingTimeline({ trackings }: props) {
  const currentIndex = trackings.length;

  return (
    <div className="space-y-4">
      {workflow.map((items, index) => {
        const history = trackings.find((tr) => tr.step === items.key);
        const compilted = !!history;

        const current = !compilted && index === currentIndex;

        return (
          <div className="relative flex items-center gap-3" key={items.key}>
            {/* garis */}
            {index !== workflow.length - 1 && (
              <div className="absolute left-2.75 top-6 w-0.5 h-10 bg-border " />
            )}

            {/* icon */}
            <div className="z-10 border rounded-full border-white bg-white">
              {compilted ? (
                <CheckCircle2 size={22} className="fill-green-500 text-white" />
              ) : current ? (
                <Clock size={22} className="text-yellow-500" />
              ) : (
                <Circle size={22} className="text-gray-400" />
              )}
            </div>

            {/* text */}
            <div className="">
              <p className="text-xs font-medium">{items.label}</p>

              {compilted && history.createdAt && (
                <p className="text-xs text-gray-500">
                  {formatDate(history.createdAt)}
                </p>
              )}

              {current && <p className="text-xs text-yellow-500">waiting...</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
