import reducer from "@/hooks/ButtonHooks";
import React, { useReducer, useState } from "react";
import { AiFillGithub, AiOutlineArrowLeft, AiOutlineEye } from "react-icons/ai";
import { BsBoxArrowUpRight, BsCodeSlash } from "react-icons/bs";
import { TbComponents } from "react-icons/tb";
import ReflexCard from "./ReflexCard";
import ShowCode from "./ShowCode";

const initialState = {
  previewButton: true,
  codeButton: false,
};

const AllNavbars = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.codeButton);

  const handleButton = (buttonName: string) => {
    // console.log(buttonName);

    if (buttonName === "previewButton" && !state.previewButton) {
      dispatch({ type: "ACTIVE_PREVIEW" });
    } else if (buttonName === "codeButton" && !state.codeButton) {
      dispatch({ type: "ACTIVE_CODE" });
    }
  };

  return (
    <div>
      <div>
        <div className="flex gap-1 text-blue-300 items-center cursor-pointer mb-5 ">
          <AiOutlineArrowLeft className="h-2 w-2" />
          <span className="font-thin text-sm">Back to all categories</span>
        </div>
        <span className="text-4xl font-extrabold  font-sans text-gray-400 ">
          Navbars
        </span>
        <div className="mt-7 border border-gray-800 rounded-md ">
          <div className="flex justify-between border-b border-gray-800 px-2 py-2 bg-[rgb(29,29,31)] text-gray-400 text-sm font-thin items-center ">
            <div className="flex gap-6 items-center justify-center  ">
              <span>Navbar with 2 sections</span>
              <div className="flex gap-3 justify-center items-center ">
                <div className="p-2 bg-[rgb(15,15,15)] rounded ">
                  <BsBoxArrowUpRight
                    className="h-[10px]  w-[10px] text-white "
                    color="white"
                  />
                </div>
                <div className="p-2 bg-[rgb(15,15,15)] rounded ">
                  <AiFillGithub
                    className="h-3  w-3 text-gray-300 "
                    color="white"
                  />
                </div>
                <div className="p-2 bg-[rgb(15,15,15)] rounded ">
                  <TbComponents
                    className="h-3  w-3 text-gray-300 "
                    color="white"
                  />
                </div>
                <span className="text-xs">Build by @</span>
              </div>
            </div>
            <div className="flex py-1 px-1  bg-black  justify-center rounded-md ">
              <div
                className={` ${
                  state.previewButton && "bg-[rgb(51,53,53)]"
                } transition duration-300  px-2 py-1 rounded-md cursor-pointer  `}
              >
                <div
                  className={` flex justify-center items-center gap-1   `}
                  onClick={() => handleButton("previewButton")}
                >
                  <AiOutlineEye />
                  <span>Preview</span>
                </div>
              </div>
              <div
                className={` ${
                  state.codeButton && "bg-[rgb(51,53,53)]"
                } transition duration-300  px-2 py-1 rounded-md  cursor-pointer`}
              >
                <div
                  className={`flex justify-center items-center gap-1 `}
                  onClick={() => handleButton("codeButton")}
                >
                  <BsCodeSlash />
                  <span>Code</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4">
            {state.previewButton ? <ReflexCard /> : <ShowCode />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNavbars;
