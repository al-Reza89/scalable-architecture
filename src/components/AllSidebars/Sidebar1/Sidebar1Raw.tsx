import React from 'react';
import styles from './Sidebar1.module.css';

export interface ISidebar1Raw {}

const Sidebar1Raw: React.FC<ISidebar1Raw> = () => {
  return <div className={styles.container}>Sidebar1Raw</div>;
};

export default Sidebar1Raw;
