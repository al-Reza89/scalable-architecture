import React from "react";
import NavbarDemo from "./ApplicationUi/NavbarDemo";

const AppliCationSection = () => {
  return (
    <div className="bg-[rgb(47,48,51)]">
      <div className="max-w-6xl mx-auto">
        <div className="py-10">
          <span className="pb- font-serif text-4xl">Application UI</span>
          <div className="pt-6">
            <NavbarDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliCationSection;
