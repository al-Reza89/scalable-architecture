import CategoryHome from '@/components/ApplicationUi/CategoryHome';
import React from 'react';

export interface ISidebars {}

const Sidebars: React.FC<ISidebars> = () => {
  return (
    <div>
      <CategoryHome />
    </div>
  );
};

export default Sidebars;
