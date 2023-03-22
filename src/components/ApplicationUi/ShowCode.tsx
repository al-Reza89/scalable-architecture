import React, { useState } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface IShowCode {
  code: string;
  RawCode: string;
  RawCss: string;
}

const ShowCode: React.FC<IShowCode> = ({ code, RawCode, RawCss }) => {
  const [isCopied, setIsCopied] = useState(false);

  console.log(RawCode);
  console.log(RawCss);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="">
      <div className="flex justify-end  ">
        <button onClick={handleCopyClick} className="cursor-pointer">
          {isCopied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      {/* 
      <SyntaxHighlighter language="javascript" style={dark}>
        {code}
      </SyntaxHighlighter> */}
      <pre
        style={{ whiteSpace: 'pre-wrap' }}
        className="text-sm text-gray-300 "
      >
        {code}
      </pre>
    </div>
  );
};

export default ShowCode;
