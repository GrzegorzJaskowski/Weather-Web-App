export const WeatherItem = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="bg-slate-500 flex h-56 w-56 items-center justify-center rounded-3xl bg-opacity-10 p-4">
      <div className="text-slate-400 text-6xl">{children}</div>
    </div>
  );
};
