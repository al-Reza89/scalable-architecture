import reducer from '@/hooks/ButtonHooks';
import { Prism } from '@mantine/prism';
import React, { useReducer, useState } from 'react';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';
import { SiTailwindcss } from 'react-icons/si';

export interface IShowCode {
  code: string;
  RawCode: string;
  RawCss: string;
}

export const initialState = {
  previewButton: false,
  codeButton: true,
  rawCodeButton: false,
  rawCssButton: false,
};

const ShowCode: React.FC<IShowCode> = ({ code, RawCode, RawCss }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButton = (buttonName: string) => {
    // console.log(buttonName);

    if (buttonName === 'rawCodeButton' && !state.rawCodeButton) {
      dispatch({ type: 'ACTIVE_RAW_CODE' });
    } else if (buttonName === 'rawCssButton' && !state.rawCssButton) {
      dispatch({ type: 'ACTIVE_RAW_CSS' });
    } else if (buttonName === 'tailwindButton' && !state.codeButton) {
      dispatch({ type: 'ACTIVE_CODE' });
    }
  };

  // console.log(RawCode);
  // console.log(RawCss);

  const handleCopyClick = () => {
    if (state.rawCodeButton) {
      navigator.clipboard.writeText(RawCode);
    } else if (state.rawCssButton) {
      navigator.clipboard.writeText(RawCss);
    } else {
      navigator.clipboard.writeText(code);
    }
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };

  return (
    <div className="flex justify-between ">
      <pre
        style={{ whiteSpace: 'pre-wrap' }}
        className="text-sm text-gray-300 font-mono  "
      >
        {state.codeButton && (
          <Prism withLineNumbers language="tsx" noCopy>
            {code}
          </Prism>
        )}
        {state.rawCssButton && (
          <Prism withLineNumbers language="css" noCopy>
            {RawCss}
          </Prism>
        )}
        {state.rawCodeButton && (
          <Prism withLineNumbers language="tsx" noCopy>
            {RawCode}
          </Prism>
        )}
      </pre>

      <div className="flex flex-col my-4 gap-3 text-xl  ">
        <div onClick={handleCopyClick} className="cursor-pointer">
          {isCopied ? (
            <HiOutlineCheck className="" color="blue" />
          ) : (
            <div>
              <HiOutlineClipboard />
            </div>
          )}
        </div>
        <div onClick={() => handleButton('rawCodeButton')}>
          <FaReact
            className={`cursor-pointer ${
              state.rawCodeButton && 'fill-blue-700'
            } `}
          />
        </div>
        <div onClick={() => handleButton('rawCssButton')}>
          <FaCss3Alt
            className={`cursor-pointer ${
              state.rawCssButton && 'fill-blue-700'
            } `}
          />
        </div>
        <div onClick={() => handleButton('tailwindButton')}>
          <SiTailwindcss
            className={`cursor-pointer ${state.codeButton && 'fill-blue-700'} `}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCode;
