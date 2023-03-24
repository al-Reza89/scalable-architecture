import Sidebar1 from '@/components/AllSidebars/Sidebar1/Sidebar1';
import {
  Code1,
  RawCode1,
  RawCss1,
} from '@/components/AllSidebars/Sidebar1/Sidebar1Text';
import CategoryHome from '@/components/ApplicationUi/CategoryHome';
import React from 'react';

export interface ISidebars {}

const componentsObjects = {
  components1: {
    component: <Sidebar1 />,
    code: Code1,
    RawCode: RawCode1,
    RawCss: RawCss1,
  },
};

const Sidebars: React.FC<ISidebars> = () => {
  return (
    <div>
      <CategoryHome
        componentsObjects={componentsObjects}
        CategoryName="Sidebars"
      />
    </div>
  );
};

export default Sidebars;
