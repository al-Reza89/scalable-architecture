import React from 'react';
import styles from './Template1Raw.module.css';

export interface ITemplate1Raw {}

const Template1Raw: React.FC<ITemplate1Raw> = () => {
  return <div className={styles.container}>Template1Raw</div>;
};

export default Template1Raw;
