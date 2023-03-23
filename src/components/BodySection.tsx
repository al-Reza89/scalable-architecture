import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsMoonStars } from 'react-icons/bs';
import { GiStabbedNote } from 'react-icons/gi';
import { RiFireLine } from 'react-icons/ri';

const BodySection = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10 ">
      <div className="flex w-[48%] flex-col pt-32 ">
        <span className="font-medium py-5 ">LIBRARY UI</span>
        <span className="text-yellow-300 text-5xl font-extrabold font-sans pb-3 ">
          134 responsive components
        </span>
        <span className="text-white text-5xl font-extrabold font-sans pb-8">
          built with Tailwind
        </span>
        <span className="text-sm text-gray-400 pb-6 ">
          Build your next website even faster with premade responsive components
          designed and built by Mantine maintainers and community. All
          components are free forever for everyone.
        </span>
        <div className="flex gap-3 pb-10 ">
          <button className="px-2 py-1 bg-yellow-500 rounded-md text-black text-sm font-semibold cursor-pointer ">
            Browse Components
          </button>
          <div className="flex justify-center items-center px-2 py-1 bg-[rgb(73,72,72)] gap-2 rounded-md cursor-pointer ">
            <AiFillGithub />
            <span className="font-sans text-sm font-bold ">GitHub</span>
          </div>
          <div className="flex justify-center items-center px-2 py-1 bg-[rgb(73,72,72)] gap-2 rounded-md cursor-pointer ">
            <span className=" text-sm font-bold ">
              Get Started with library
            </span>
            <BsBoxArrowUpRight className="h-3 w-3 " />
          </div>
        </div>
        <div className="flex gap-3 py-6 ">
          <div className="w-[30%] flex flex-col gap-2">
            <div className="w-fit p-3 bg-[rgb(39,40,41)] rounded-md">
              <RiFireLine color="yellow" className="" />
            </div>
            <span>Flexible</span>
            <span className="text-xs text-gray-400 ">
              All components are built with Mantine theme, change colors, fonts,
              shadows and other properties.
            </span>
          </div>
          <div className="w-[30%] flex flex-col gap-2">
            <div className="w-fit p-3 bg-[rgb(39,40,41)] rounded-md">
              <BsMoonStars color="yellow" className="" />
            </div>
            <span>Light and dark theme</span>
            <span className="text-xs text-gray-400 ">
              Most components support both dark and light color schemes by
              default, no additional modifications needed.
            </span>
          </div>
          <div className="w-[30%] flex flex-col gap-2">
            <div className="w-fit p-3 bg-[rgb(39,40,41)] rounded-md">
              <GiStabbedNote color="yellow" className="" />
            </div>
            <span>Free for everyone</span>
            <span className="text-xs text-gray-400 ">
              Free, open source, community-driven, MIT license. Use anywhere,
              including commercial projects.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
