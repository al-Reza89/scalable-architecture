import React from 'react';

export interface IOther3 {}

const Other3: React.FC<IOther3> = () => {
  return (
    <button className="relative py-2 px-4 text-white font-bold bg-transparent border-none cursor-pointer transition-colors duration-300">
      Button
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-width duration-300"></span>
    </button>
  );
};

export default Other3;
