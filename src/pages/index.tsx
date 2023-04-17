import { type NextPage } from "next";
import { WeatherItem } from "~/components/weatherItem";

const Home: NextPage = () => {
  return (
    <main className="flex h-screen">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-t from-slate-800 to-cyan-800">
        <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-12">
          <WeatherItem name="01"></WeatherItem>
          <WeatherItem name="02"></WeatherItem>
          <WeatherItem name="03"></WeatherItem>
          <WeatherItem name="04"></WeatherItem>
        </div>
      </div>
    </main>
  );
};

export default Home;
