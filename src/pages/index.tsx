import { type NextPage } from "next";
import { WeatherItem } from "~/components/weatherItem";

function getTime() {
  const now = new Date();
  return (
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0")
  );
}

function getDate() {
  const now = new Date();
  return (
    now.toLocaleDateString("en-EN", { weekday: "long" }) +
    " " +
    now.getDate().toString().padStart(2, "0") +
    "." +
    now.getMonth().toString().padStart(2, "0")
  );
}

const Home: NextPage = () => {
  return (
    <main className="flex h-screen">
      <div className="relative flex h-full w-full bg-gradient-to-t from-slate-800 to-cyan-800">
        <div className="absolute flex h-1/4 w-full place-items-center justify-center">
          <div className="text-4xl text-slate-400">{getTime()}</div>
        </div>
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-12">
            <WeatherItem name="01"></WeatherItem>
            <WeatherItem name="02"></WeatherItem>
            <WeatherItem name="03"></WeatherItem>
            <WeatherItem name="04"></WeatherItem>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-1/4 w-full place-items-center justify-center">
          <div className="text-4xl text-slate-400">{getDate()}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
