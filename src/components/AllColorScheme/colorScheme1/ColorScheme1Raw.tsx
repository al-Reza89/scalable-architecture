import React from 'react';
import styles from './ColorScheme1Raw.module.css';

export interface IColorScheme1Raw {}

const ColorScheme1Raw: React.FC<IColorScheme1Raw> = () => {
  return <div className={styles.container}>ColorScheme1Raw</div>;
};

export default ColorScheme1Raw;
