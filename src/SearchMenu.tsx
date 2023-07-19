import SearchIcon from "./icons/SearchIcon";
import { useState } from "react";
import { City } from "./types";

function SearchMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  return (
    <>
      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className="bg-slate-900 rounded-full p-3 fill-white place-self-end"
      >
        <SearchIcon />
      </button>
      {isOpened ? (
        <div className="absolute right-14 top-2">
          <input
            className="bg-slate-700 p-2 rounded-t-md outline-slate-900 outline-1"
            type="text"
            placeholder="City..."
          />
          <ul className="bg-slate-700">
            {cities.map((city) => (
              <li className="p-1">{city.city}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default SearchMenu;
