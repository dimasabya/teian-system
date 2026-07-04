import { Check } from "lucide-react";

type ProgressStepProps = {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
};

export default function ProgressStepper({
  step1,
  step2,
  step3,
  step4,
}: ProgressStepProps) {
  return (
    <div className="flex items-start w-full">
      <Step number={1} title="Basic" active={step1} />
      <Line active={step1} />
      <Step number={2} title="Problem" active={step2} />
      <Line active={step2} />
      <Step number={3} title="Impect" active={step3} />
      <Line active={step3} />
      <Step number={4} title="File" active={step4} />
    </div>
  );
}

function Step({
  number,
  title,
  active = false,
}: {
  number: number;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${active ? "bg-primary text-white" : "bg-gray-300 text-foreground"}`}
      >
        {active ? <Check /> : number}
      </div>
      <span className="text-xs mt-1">{title}</span>
    </div>
  );
}

function Line({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`flex-1 h-0.5 mt-4 ${active ? "bg-primary" : "bg-border"}`}
    />
  );
}
