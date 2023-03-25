import React from 'react';
import styles from './ColorScheme1.module.css';

export interface IColorScheme1 {}

const ColorScheme1: React.FC<IColorScheme1> = () => {
  return <div className={styles.container}>ColorScheme1</div>;
};

export default ColorScheme1;
