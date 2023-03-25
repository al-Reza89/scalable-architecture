import React from 'react';
import styles from './Template1.module.css';

export interface IGrid1Raw {}

const Grid1Raw: React.FC<IGrid1Raw> = () => {
  return <div className={styles.container}>Grid1Raw</div>;
};

export default Grid1Raw;
