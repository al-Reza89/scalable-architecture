import React, { useState } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface IShowCode {
  text: string;
}

const ShowCode: React.FC<IShowCode> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
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
        {text}
      </SyntaxHighlighter> */}
      <pre
        style={{ whiteSpace: 'pre-wrap' }}
        className="text-sm text-gray-300 "
      >
        {text}
      </pre>
    </div>
  );
};

export default ShowCode;
