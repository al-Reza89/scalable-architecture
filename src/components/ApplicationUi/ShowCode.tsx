import reducer from '@/hooks/ButtonHooks';
import React, { useReducer, useState } from 'react';
import { HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';

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
    }, 1000);
  };

  return (
    <div className="flex justify-between ">
      <pre
        style={{ whiteSpace: 'pre-wrap' }}
        className="text-sm text-gray-300 "
      >
        {state.codeButton && code}
        {state.rawCssButton && RawCss}
        {state.rawCodeButton && RawCode}
      </pre>
      <div className="flex flex-col mt-4   ">
        <div onClick={handleCopyClick} className="cursor-pointer">
          {isCopied ? (
            <HiOutlineCheck />
          ) : (
            <div>
              <HiOutlineClipboard />
            </div>
          )}
        </div>
        <div onClick={() => handleButton('rawCodeButton')}>rawCode</div>
        <div onClick={() => handleButton('rawCssButton')}>rawCss</div>
        <div onClick={() => handleButton('tailwindButton')}>tailwind code</div>
      </div>
    </div>
  );
};

export default ShowCode;
