import React from 'react';

export interface IShowCode {
  text: string;
}

const ShowCode: React.FC<IShowCode> = ({ text }) => {
  return <div>{text}</div>;
};

export default ShowCode;
