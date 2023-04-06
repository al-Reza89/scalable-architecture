import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ShowCategory from './ShowCategory';

type ComponentObject = {
  component: React.ReactNode;
  code: string;
  RawCode: string;
  RawCss: string;
};

type ComponentsObjects = {
  [key: string]: ComponentObject;
};

export interface IAllCategory {
  componentsObjects?: ComponentsObjects;
  CategoryName?: string;
}

const AllCategory: React.FC<IAllCategory> = ({
  componentsObjects = {},
  CategoryName,
}) => {
  // console.log({ componentsObjects: componentsObjects });
  return (
    <div>
      <div className="mb-8">
        <div className="flex gap-1 text-blue-300 items-center cursor-pointer mb-5 ">
          <AiOutlineArrowLeft className="h-2 w-2" />
          <Link href={'/categories'}>
            <span className="font-thin text-sm">Back to all categories</span>
          </Link>
        </div>
        <span className="text-4xl font-extrabold  font-sans text-gray-400 ">
          {CategoryName}
        </span>
        <div>
          {Object.entries(componentsObjects).map(
            ([key, { component, code, RawCode, RawCss }]) => (
              <ShowCategory
                key={key}
                component={component}
                code={code}
                RawCode={RawCode}
                RawCss={RawCss}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCategory;
