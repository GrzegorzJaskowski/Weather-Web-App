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
  ).replace("0", "O");
}
function getDate() {
  return (
    (day ? day : "") +
    " " +
    dayjs().date().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
    "." +
    (dayjs().month() + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 })
  ).replace("0", "O");
}

const Home: NextPage = () => {
  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${process.env.REACT_APP_API_KEY}`
  //     );
  //     setData(response)
  //   };
  // });

  return (
    <main className="flex h-screen">
      <div className="relative flex h-full w-full bg-gradient-to-t from-slate-800 to-cyan-800">
        <div className="absolute flex h-1/4 w-full place-items-center justify-center">
          <div className="font-dosis text-7xl tracking-wide text-violet-400 subpixel-antialiased">
            {getTime()}
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
            {getDate()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
