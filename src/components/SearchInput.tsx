import React, { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

type Props = {
  setIsInputOpen: any;
  isInputOpen: any;
};

const SearchInput: React.FC<Props> = ({ setIsInputOpen, isInputOpen }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line no-unused-vars
  const handleButtonClick = (): void => {
    setIsInputOpen(true);
  };

  const handleInputBlur = (): void => {
    setIsInputOpen(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'ArrowDown') {
      // do something on down arrow key press
    } else if (event.key === 'ArrowUp') {
      // do something on up arrow key press
    } else if (event.key === 'Enter') {
      // do something on enter key press
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsInputOpen(false);
      }
    };

    if (isInputOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInputOpen, setIsInputOpen]);

  return (
    <div className="absolute top-[33%] left-[33%] z-20  ">
      {isInputOpen && (
        <div className=" bg-[rgb(45,45,46)] py-3 px-1 " ref={inputRef}>
          <div className=" blur-sm  z-20"></div>
          <div className="flex pb-2 pl-2  justify-center items-center gap-2 border-b-[1px] border-slate-400 ">
            <div>
              <CiSearch />
            </div>
            <div>
              <input
                type="text"
                value={searchValue}
                placeholder="Search Component"
                className="bg-transparent h-8 w-[30rem] outline-none text-white rounded-sm "
                onKeyDown={handleKeyDown}
                onBlur={handleInputBlur}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="py-2 hover:bg-[rgb(30,30,30)] rounded-md mt-3  cursor-pointer">
              <div className="pl-2 flex flex-col text-sm gap-[1px] ">
                <span className="text-gray-200  font-medium ">
                  ActionToggle
                </span>
                <span className="text-xs text-gray-400">
                  {' '}
                  simple color scheme toggle
                </span>
              </div>
            </div>
            <div className="py-2 hover:bg-[rgb(30,30,30)] rounded-md mt-3  cursor-pointer">
              <div className="pl-2 flex flex-col text-sm gap-[1px] ">
                <span className="text-gray-200  font-medium ">
                  ActionToggle
                </span>
                <span className="text-xs text-gray-400">
                  {' '}
                  simple color scheme toggle
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
