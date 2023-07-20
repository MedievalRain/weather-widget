import { useState } from "react";
import SearchMenu from "./SearchMenu";
import { City } from "./types";
import Display from "./Display";

function Widget() {
  const [pickedCity, setPickedCity] = useState<City>({
    city: "Moscow",
    latitude: "55.755800",
    longitude: "37.617800",
    country: "Russia",
    timezone: "Europe/Moscow",
  });
  return (
    <div className="gradient-bg text-white max-w-md w-full rounded-md h-96 overflow-hidden">
      <div className="h-full w-full backdrop-blur-3xl flex flex-col items-start p-2">
        <SearchMenu setPickedCity={setPickedCity} />
        <Display pickedCity={pickedCity} />
      </div>
    </div>
  );
}

export default Widget;
