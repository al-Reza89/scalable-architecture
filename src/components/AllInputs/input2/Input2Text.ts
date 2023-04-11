export const Code2: string = `
import React from 'react';

export interface ISidebar1 {}

const Sidebar1: React.FC<ISidebar1> = () => {
  return <div>Sidebar1</div>;
};

export default Sidebar1;
`;

export const RawCode2: string = `
import React from 'react';
import styles from './sidebar1.module.css';

export interface ISidebar1Raw {}

const Sidebar1Raw: React.FC<ISidebar1Raw> = () => {
  return <div className={styles.container}>Sidebar1Raw</div>;
};

export default Sidebar1Raw;

`;

export const RawCss2: string = `
.container {
    display: flex;
  }  
`;
