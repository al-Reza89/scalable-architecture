import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarDemo = () => {
  return (
    <div className="w-[24%] h-60 ">
      <Link href={"/category/navbars"}>
        <div className="h-[75%] w-full bg-black rounded-t-md cursor-pointer  relative ">
          <Image
            src={"/images/navbar.svg"}
            alt="navbar"
            fill
            className="w-full h-full hover:touch-pinch-zoom "
          />
        </div>
        <div className="h-[25%] bg-[rgb(71,75,83)] rounded-b-md px-2  py-1 ">
          <div className="font-sans">Navbars</div>
          <div className="text-xs ">9 Components</div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarDemo;
