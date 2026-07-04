type cardComponentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardComponents({
  children,
  className,
}: cardComponentProps) {
  return (
    <div
      className={`border border-border bg-bg-border rounded-xl p-4 flex-1 ${className}`}
    >
      {children}
    </div>
  );
}
