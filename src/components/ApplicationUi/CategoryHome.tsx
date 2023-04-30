import React from 'react';
import Headers from '../Headers';
import AllCategory from './AllCategory';

type ComponentObject = {
  component: React.ReactNode;
  code: string;
  RawCode: string;
  RawCss: string;
  MetaData?: string;
  childComponent1?: string;
  childComponent2?: string;
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
        <AllCategory
          componentsObjects={componentsObjects}
          CategoryName={CategoryName}
        />
      </div>
    </div>
  );
};

export default CategoryHome;
