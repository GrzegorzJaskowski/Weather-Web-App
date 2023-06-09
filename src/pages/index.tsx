import { type NextPage } from "next";
import { WeatherItem } from "~/components/weatherItem";
import dayjs from "dayjs";
import { WiThermometer } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiSmog } from "react-icons/wi";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [time, setTime] = useState(
    (
      dayjs().hour(dayjs().hour()).format("HH") +
      ":" +
      dayjs().minute(dayjs().minute()).format("mm")
    ).replaceAll("0", "O")
  );
  const [date, setDate] = useState(
    (
      dayjs().day(dayjs().day()).format("dddd") +
      " " +
      dayjs().date(dayjs().date()).format("DD") +
      "." +
      dayjs().month(dayjs().month()).format("MM")
    ).replaceAll("0", "O")
  );

  useEffect(() => {
    const timeTimer = setInterval(() => {
      setTime(
        (
          dayjs().hour(dayjs().hour()).format("HH") +
          ":" +
          dayjs().minute(dayjs().minute()).format("mm")
        ).replaceAll("0", "O")
      );
    }, (dayjs().second() === 0 ? 60 : 60 - dayjs().second()) * 1000);

    const dateTimer = setInterval(() => {
      setDate(
        (
          dayjs().day(dayjs().day()).format("dddd") +
          " " +
          dayjs().date(dayjs().date()).format("DD") +
          "." +
          dayjs().month(dayjs().month()).format("MM")
        ).replaceAll("0", "O")
      );
    }, (dayjs().hour() === 0 ? 23 : 23 - dayjs().hour()) * (dayjs().minute() === 0 ? 59 : 59 - dayjs().minute()) * (dayjs().second() === 0 ? 60 : 60 - dayjs().second()) * 1000);

    return () => {
      clearInterval(timeTimer);
      clearInterval(dateTimer);
    };
  }, [time, date]);

  return (
    <main className="flex h-screen">
      <div className="relative flex h-full w-full bg-gradient-to-t from-slate-800 to-cyan-800">
        <div className="absolute flex h-1/4 w-full place-items-center justify-center">
          <div className="font-dosis text-7xl tracking-wide text-violet-400 subpixel-antialiased">
            {time}
          </div>
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
          <div className="font-dosis text-7xl tracking-wide text-violet-400 subpixel-antialiased">
            {date}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
