import reducer from '@/hooks/ButtonHooks';
import { Prism } from '@mantine/prism';
import React, { useReducer, useState } from 'react';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { HiCode, HiOutlineCheck, HiOutlineClipboard } from 'react-icons/hi';
import { SiTailwindcss } from 'react-icons/si';

export interface IShowCode {
  code: string;
  RawCode: string;
  RawCss: string;
  MetaData?: string;
  childComponent1?: string;
  childComponent2?: string;
}

export const initialState = {
  previewButton: false,
  codeButton: true,
  rawCodeButton: false,
  rawCssButton: false,
};

const ShowCode: React.FC<IShowCode> = ({
  code,
  RawCode,
  RawCss,
  MetaData = '',
  childComponent1 = '',
  childComponent2 = '',
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({ MetaData: MetaData });
  console.log({ childComponent1: childComponent1 });
  console.log({ childComponent2: childComponent2 });

  const handleButton = (buttonName: string) => {
    // console.log(buttonName);

    if (buttonName === 'rawCodeButton' && !state.rawCodeButton) {
      dispatch({ type: 'ACTIVE_RAW_CODE' });
    } else if (buttonName === 'rawCssButton' && !state.rawCssButton) {
      dispatch({ type: 'ACTIVE_RAW_CSS' });
    } else if (buttonName === 'tailwindButton' && !state.codeButton) {
      dispatch({ type: 'ACTIVE_CODE' });
    } else if (
      buttonName === 'childComponent1Button' &&
      !state.component1Button
    ) {
      dispatch({ type: 'ACTIVE_COMPONENT1' });
    } else if (
      buttonName === 'childComponent2Button' &&
      !state.component2Button
    ) {
      dispatch({ type: 'ACTIVE_COMPONENT2' });
    } else if (buttonName === 'metaDataButton' && !state.metaDataButton) {
      dispatch({ type: 'META_DATA' });
    }
  };

  // console.log(RawCode);
  // console.log(RawCss);

  const handleCopyClick = () => {
    if (state.rawCodeButton) {
      navigator.clipboard.writeText(RawCode);
    } else if (state.rawCssButton) {
      navigator.clipboard.writeText(RawCss);
    } else if (state.component1Button) {
      navigator.clipboard.writeText(childComponent1);
    } else if (state.component2Button) {
      navigator.clipboard.writeText(childComponent2);
    } else if (state.metaDataButton) {
      navigator.clipboard.writeText(MetaData);
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
        {state.component1Button && (
          <Prism withLineNumbers language="tsx" noCopy>
            {childComponent1}
          </Prism>
        )}
        {state.component2Button && (
          <Prism withLineNumbers language="tsx" noCopy>
            {childComponent2}
          </Prism>
        )}
        {state.metaDataButton && (
          <Prism withLineNumbers language="tsx" noCopy>
            {MetaData}
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
        {childComponent1 && (
          <div onClick={() => handleButton('childComponent1Button')}>
            <HiCode
              className={`cursor-pointer ${
                state.component1Button && 'fill-blue-700'
              } `}
            />
          </div>
        )}
        {childComponent2 && (
          <div onClick={() => handleButton('childComponent2Button')}>
            <HiCode
              className={`cursor-pointer ${
                state.component2Button && 'fill-blue-700'
              } `}
            />
          </div>
        )}
        {MetaData && (
          <div onClick={() => handleButton('metaDataButton')}>
            <BsDatabaseFillCheck
              className={`cursor-pointer ${
                state.metaDataButton && 'fill-blue-700'
              } `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCode;
