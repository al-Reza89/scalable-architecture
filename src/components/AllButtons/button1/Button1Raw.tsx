import React from 'react';
import styles from './Button1Raw.module.css';

export interface IButton1Raw {}

const Button1Raw: React.FC<IButton1Raw> = () => {
  return <div className={styles.container}>Button1Raw</div>;
};

export default Button1Raw;
