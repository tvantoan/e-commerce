export default function Sort({
  name,
  criteria,
  icon,
}: {
  name: string;
  criteria: string;
  icon: React.ReactNode;
}) {
  return (
    <button className="flex h-10 cursor-pointer items-center justify-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-3 text-base font-medium whitespace-nowrap text-neutral-800 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500">
      <span className="size-5">{icon}</span>
      {name}
    </button>
  );
}
