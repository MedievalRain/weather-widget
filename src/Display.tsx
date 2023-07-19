import LocationIcon from "./icons/LocationIcon";
import { City } from "./types";

interface IDisplayProps {
  pickedCity: City;
}

function Display({ pickedCity }: IDisplayProps) {
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
