import { LoadingPage } from "./loading";

export const WeatherItem = (props: { name?: string }) => {
  return (
    <div className="flex h-56 w-56 items-center justify-center rounded-3xl bg-slate-500 bg-opacity-10 p-4">
      <div>{props.name}</div>
    </div>
  );
};
