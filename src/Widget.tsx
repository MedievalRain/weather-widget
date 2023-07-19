import { useState } from "react";
import SearchMenu from "./SearchMenu";

function Widget() {
  return (
    <div className="gradient-bg text-white max-w-md w-full rounded-md h-96">
      <div className="h-full w-full backdrop-blur-3xl flex flex-col items-start p-2">
        <SearchMenu />
      </div>
    </div>
  );
}

export default Widget;
