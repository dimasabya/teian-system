type AvatarProp = {
  name: string;
  className: string;
};

export default function InitialName({ name, className }: AvatarProp) {
  const initials = name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold ${className}`}
    >
      {initials}
    </div>
  );
}
