export const WeatherItem = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="flex h-56 w-56 items-center justify-center rounded-3xl bg-slate-500 bg-opacity-10 p-4">
      {/* <div className="text-slate-400 text-8xl ">{children}</div> */}
      <div className="text-8xl text-violet-400 ">{children}</div>
    </div>
  );
};
