import { type NextPage } from "next";
import { WeatherItem } from "~/components/weatherItem";
import dayjs from "dayjs";
import { WiThermometer } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiSmog } from "react-icons/wi";
WiBarometer;
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

function getTime() {
  return (
    dayjs().hour().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
    ":" +
    dayjs().minute().toLocaleString("en-US", { minimumIntegerDigits: 2 })
  );
}
function getDate() {
  return (
    (day ? day : "") +
    " " +
    dayjs().date().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
    "." +
    (dayjs().month() + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 })
  );
}

const Home: NextPage = () => {
  return (
    <main className="flex h-screen">
      <div className="from-slate-800 to-cyan-800 relative flex h-full w-full bg-gradient-to-t">
        <div className="absolute flex h-1/4 w-full place-items-center justify-center">
          <div className="text-slate-400 text-4xl">{getTime()}</div>
        </div>
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-2 place-items-center gap-12">
            <WeatherItem>
              <WiThermometer />
            </WeatherItem>
            <WeatherItem>
              <WiDaySunny />
            </WeatherItem>
            <WeatherItem>
              <WiBarometer />
            </WeatherItem>
            <WeatherItem>
              <WiSmog />
            </WeatherItem>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-1/4 w-full place-items-center justify-center">
          <div className="text-slate-400 text-4xl">{getDate()}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
