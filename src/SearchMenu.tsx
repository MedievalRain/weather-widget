import SearchIcon from "./icons/SearchIcon";
import { useState, useRef, useEffect } from "react";
import { City } from "./types";

interface ISearchMenuProps {
  setPickedCity: (arg: City) => void;
}

function SearchMenu({ setPickedCity }: ISearchMenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  async function fetchCities(cityQuery: string) {
    cityQuery = cityQuery.charAt(0).toUpperCase() + cityQuery.slice(1);
    const response = await fetch(
      `https://weather-api-flax-eta.vercel.app/api/search?city=${cityQuery}`
    );
    const data: unknown = await response.json();
    if (response.status === 200 && Array.isArray(data)) {
      setCities(data);
    }
  }
  function handleClickOutside(event: MouseEvent) {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node)
    ) {
      setIsOpened(false);
    }
  }
  function handleEscape(event: KeyboardEvent) {
    if (event.code === "Escape") {
      setIsOpened(false);
    }
  }
  useEffect(() => {
    if (isOpened) {
      inputRef.current?.focus();
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [componentRef, isOpened]);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetchCities(inputText).catch(console.error);
    }, 200);
    return () => clearTimeout(timeOutId);
  }, [inputText]);
  return (
    <div className="place-self-end" ref={componentRef}>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="bg-slate-900 rounded-full p-3 fill-white"
      >
        <SearchIcon />
      </button>
      {isOpened ? (
        <div className="absolute right-14 top-2 bg-slate-700 rounded-md ">
          <input
            ref={inputRef}
            className="bg-slate-700 p-2 w-full focus:outline-none rounded-t-md"
            type="text"
            placeholder="City..."
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
          <div className="bg-slate-700 flex flex-col last:rounded-b-md">
            {cities.map((city) => (
              <button
                key={city.city + city.latitude.toString()}
                onClick={() => {
                  setPickedCity(city);
                  setIsOpened(false);
                }}
                className="text-start py-1 last:rounded-b-md hover:bg-slate-500 px-2 outline-slate-900"
              >
                {city.city}, {city.country}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchMenu;
