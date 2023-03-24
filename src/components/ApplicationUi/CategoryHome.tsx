import React from 'react';
import Headers from '../Headers';
import AllNavbars from './AllNavbars';

type ComponentObject = {
  component: React.ReactNode;
  code: string;
  RawCode: string;
  RawCss: string;
};

type ComponentsObjects = {
  [key: string]: ComponentObject;
};

export interface ICategoryHome {
  componentsObjects?: ComponentsObjects;
}

const CategoryHome: React.FC<ICategoryHome> = ({ componentsObjects = {} }) => {
  return (
    <div>
      <Headers />
      <div className="max-w-7xl mx-auto pt-10 ">
        <AllNavbars componentsObjects={componentsObjects} />
      </div>
    </div>
  );
};

export default CategoryHome;
