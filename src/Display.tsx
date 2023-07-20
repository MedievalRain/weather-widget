import { useEffect, useState } from "react";
import LocationIcon from "./icons/LocationIcon";
import type { City, WeatherData, WeatherResponse } from "./types";
import { codes } from "./consts";
import { getSrc } from "./utils";
interface IDisplayProps {
  pickedCity: City;
}

function Display({ pickedCity }: IDisplayProps) {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    src: "",
    temperature: undefined,
    description: "",
  });
  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${pickedCity.latitude}&longitude=${pickedCity.longitude}&current_weather=true&timezone=${pickedCity.timezone}`
      );
      const json: WeatherResponse = (await response.json()) as WeatherResponse;
      const wwCode = codes.find(
        (item) => item.code === json.current_weather.weathercode
      );
      const temperature = json.current_weather.temperature;
      const isDay = json.current_weather.is_day;
      if (wwCode && temperature && isDay) {
        const src = getSrc(wwCode.file, isDay);
        const description = wwCode.text;
        setWeatherData({
          src: src,
          temperature: temperature,
          description: description,
        });
      }
    };
    void fetchWeatherData();
  }, [pickedCity]);

  return (
    <div className="flex flex-col divide-y w-full px-2 divide-teal-100">
      <div className="h-72"></div>
      <div className="inline-flex items-center gap-1 fill-white px-2">
        <LocationIcon />
        {pickedCity.city}, {pickedCity.country}
      </div>
    </div>
  );
}

export default Display;
