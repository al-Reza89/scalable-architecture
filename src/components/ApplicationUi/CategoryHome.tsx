import React from 'react';
import Headers from '../Headers';
import AllNavbars from './AllCategory';

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
  CategoryName?: string;
}

const CategoryHome: React.FC<ICategoryHome> = ({
  componentsObjects = {},
  CategoryName,
}) => {
  return (
    <div>
      <Headers />
      <div className="max-w-7xl mx-auto pt-10 ">
        <AllNavbars
          componentsObjects={componentsObjects}
          CategoryName={CategoryName}
        />
      </div>
    </div>
  );
};

export default CategoryHome;
