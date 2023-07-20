import { useEffect, useState } from "react";
import LocationIcon from "./icons/LocationIcon";
import { City, WeatherData } from "./types";

interface IDisplayProps {
  pickedCity: City;
}

function Display({ pickedCity }: IDisplayProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  useEffect(() => {
    const fetchWeatherData = async () => {
      setWeatherData(undefined);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${pickedCity.latitude}&longitude=${pickedCity.longitude}&current_weather=true&timezone=${pickedCity.timezone}`
      );
      const json: WeatherData = (await response.json()) as WeatherData;
      setWeatherData(json);
    };
    void fetchWeatherData();
  }, [pickedCity]);

  return (
    <div className="flex flex-col divide-y w-full px-2 divide-teal-100">
      <div className="h-72">{weatherData?.current_weather.temperature}</div>
      <div className="inline-flex items-center gap-1 fill-white px-2">
        <LocationIcon />
        {pickedCity.city}, {pickedCity.country}
      </div>
    </div>
  );
}

export default Display;
