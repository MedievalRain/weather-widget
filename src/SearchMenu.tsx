import SearchIcon from "./icons/SearchIcon";
import { useState } from "react";

function SearchMenu() {
  const [isOpened, setIsOpened] = useState(false);
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
    </>
  );
}

export default SearchMenu;
