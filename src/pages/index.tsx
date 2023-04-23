import { type NextPage } from "next";
import { WeatherItem } from "~/components/weatherItem";
import dayjs from "dayjs";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[dayjs().day()]?.toString();

const time =
  dayjs().hour().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
  ":" +
  dayjs().minute().toLocaleString("en-US", { minimumIntegerDigits: 2 });

const date =
  (day ? day : "") +
  " " +
  dayjs().date().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
  "." +
  dayjs().month().toLocaleString("en-US", { minimumIntegerDigits: 2 });

const Home: NextPage = () => {
  return (
    <main className="flex h-screen">
      <div className="relative flex h-full w-full bg-gradient-to-t from-slate-800 to-cyan-800">
        <div className="absolute flex h-1/4 w-full place-items-center justify-center">
          <div className="text-4xl text-slate-400">{time}</div>
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
          <div className="text-4xl text-slate-400">{date}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
