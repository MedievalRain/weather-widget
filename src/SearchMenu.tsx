import SearchIcon from "./icons/SearchIcon";
import { useState, useRef, useEffect } from "react";
import { City } from "./types";

interface ISearchMenuProps {
  setPickedCity: (arg: City) => void;
}

function SearchMenu({ setPickedCity }: ISearchMenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  async function fetchCities(cityQuery: string) {
    const response = await fetch(
      `https://weather-api-flax-eta.vercel.app/api/search?city=${cityQuery}`
    );
    const data: unknown = await response.json();
    if (response.status === 200 && Array.isArray(data)) {
      setCities(data);
    }
  }
  useEffect(() => {
    inputRef.current?.focus();
    console.log("Fetch");
  });

  return (
    <>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="bg-slate-900 rounded-full p-3 fill-white place-self-end"
      >
        <SearchIcon />
      </button>
      {isOpened ? (
        <div className="absolute right-14 top-2 bg-slate-700 rounded-md ">
          <input
            ref={inputRef}
            className="bg-slate-700 p-2 w-full focus:outline-none"
            type="text"
            placeholder="City..."
            onChange={(event) => {
              fetchCities(event.target.value).catch(console.error);
            }}
          />
          <div className="bg-slate-700 overflow-hidden flex flex-col ">
            {cities.map((city) => (
              <button
                key={city.city + city.latitude.toString()}
                onClick={() => setPickedCity(city)}
                className="text-start py-1 hover:bg-slate-500 px-2"
              >
                {city.city}, {city.country}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SearchMenu;
