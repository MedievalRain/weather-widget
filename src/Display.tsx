import { City } from "./types";

interface IDisplayProps {
  pickedCity: City;
}

function Display({ pickedCity }: IDisplayProps) {
  return <div>{pickedCity.city}</div>;
}

export default Display;
