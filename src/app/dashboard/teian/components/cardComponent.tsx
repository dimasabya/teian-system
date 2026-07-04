import { ReactNode } from "react";

type cardComponentProps = {
  children: ReactNode;
};

export default function CardComponenent({ children }: cardComponentProps) {
  return (
    <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
      {children}
    </div>
  );
}
