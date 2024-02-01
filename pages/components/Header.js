import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed z-20">
      <nav className="flex items-center justify-between flex-wrap bg-[#19A7CE] p-6 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 mx-auto container ">
          <span className="font-semibold text-2xl tracking-tight italic">
            ✈️ Plane Selector
          </span>
        </div>
      </nav>
    </header>
  );
}
