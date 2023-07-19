import SearchIcon from "./icons/SearchIcon";
import { useState } from "react";

function SearchMenu() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpened(!opened);
        }}
        className="bg-slate-900 rounded-full p-3 fill-white place-self-end"
      >
        <SearchIcon />
      </button>
    </>
  );
}

export default SearchMenu;
