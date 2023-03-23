export const Code: string = `
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { RiSunLine } from 'react-icons/ri';
import { SiDiscord, SiRakuten } from 'react-icons/si';
import SearchInput from '../../SearchInput';

const Headers1 = () => {
  const [showDiscord, setShowDiscord] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showDark, setShowDark] = useState(false);
  const [isInputOpen, setIsInputOpen] = useState(false);

  return (
    <div className="  ">
      <div className=" w-full h-14 bg-[rgb(29,29,31)]  z-10 sticky    ">
        <div className=" flex justify-between h-full items-center  max-w-7xl mx-auto  ">
          <div className="flex justify-center items-center gap-2 cursor-pointer  ">
            <SiRakuten
              className="bg-yellow-300 rounded-[50%] p-1 h-7 w-7 "
              color="black"
            />
            <span className=" font-serif  font-semibold text-lg   ">
              Library
            </span>
          </div>
          <div className="flex justify-center items-center gap-3  ">
            <div
              className="flex gap-[130px] px-[6px] py-[6px] rounded-md bg-[rgb(42,42,44)] cursor-pointer "
              onClick={() => setIsInputOpen(true)}
            >
              <div className="flex justify-center items-center gap-2  ">
                <CiSearch className="text-gray-400 mt-[2px] " />
                <span className="text-gray-400 text-sm ">Search</span>
              </div>
              <div className="px-1 rounded  bg-[rgb(29,29,29)]">
                <span className=" text-gray-400 text-sm">ctrl+K</span>
              </div>
            </div>
            <div className="relative">
              <div
                className="p-[5px] cursor-pointer  bg-blue-500  rounded-md  "
                onMouseEnter={() => setShowDiscord(true)}
                onMouseLeave={() => setShowDiscord(false)}
              >
                <SiDiscord className="h-5 w-5" />
              </div>
              <span
                className={\`\${
                  showDiscord
                    ? 'absolute -left-4 py-1 px-2 bg-black mt-2 rounded-sm text-sm '
                    : 'hidden'
                }\`}
              >
                Discord
              </span>
            </div>
            <div className="relative">
              <div
                className="p-[6px] cursor-pointer bg-[rgb(43,43,44)]  hover:bg-[rgb(48,48,49)]  rounded-md  "
                onMouseEnter={() => setShowGithub(true)}
                onMouseLeave={() => setShowGithub(false)}
              >
                <BsGithub className="h-5 w-5" />
              </div>
              <span
                className={\`\${
                  showGithub
                    ? 'absolute -left-4 py-1 px-2 bg-black mt-2 rounded-sm text-sm '
                    : 'hidden'
                }\`}
              >
                Github
              </span>
            </div>
            <div className="relative">
              <div
                className="p-[6px] cursor-pointer  bg-[rgb(40,40,41)] hover:bg-[rgb(48,48,49)] rounded-md   "
                onMouseEnter={() => setShowDark(true)}
                onMouseLeave={() => setShowDark(false)}
              >
                <RiSunLine className="h-5 w-5" />
              </div>
              <span
                className={\`\${
                  showDark
                    ? 'absolute -left-2 py-1 px-2 bg-black mt-2 rounded-sm text-sm w-fit '
                    : 'hidden'
                }\`}
              >
                Light
              </span>
            </div>
          </div>
        </div>
      </div>
      {setIsInputOpen && (
        <SearchInput
          setIsInputOpen={setIsInputOpen}
          isInputOpen={isInputOpen}
        />
      )}
    </div>
  );
};

export default Headers1;
`;

export const RawCode: string = `
import React from 'react';
import styles from './Header1Raw.module.css';

export interface IHeader1Raw {}

const Header1Raw: React.FC<IHeader1Raw> = () => {
  return <div className={styles.container}>Header1Raw</div>;
};

export default Header1Raw;
`;

export const RawCss: string = `
.container {
  display: flex;
  justify-content: center;
}
`;
