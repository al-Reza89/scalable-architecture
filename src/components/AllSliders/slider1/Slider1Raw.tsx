import React from 'react';
import styles from './Slider1Raw.module.css';

export interface ISlider1Raw {}

const Slider1Raw: React.FC<ISlider1Raw> = () => {
  return <div className={styles.container}>Slider1Raw</div>;
};

export default Slider1Raw;
