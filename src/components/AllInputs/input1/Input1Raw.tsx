import React from 'react';
import styles from './Input1Raw.module.css';

export interface IInput1Raw {}

const Input1Raw: React.FC<IInput1Raw> = () => {
  return <div className={styles.container}>Input1Raw</div>;
};

export default Input1Raw;
