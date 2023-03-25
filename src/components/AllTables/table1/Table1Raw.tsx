import React from 'react';
import styles from './Table1Raw.module.css';

export interface ITable1Raw {}

const Table1Raw: React.FC<ITable1Raw> = () => {
  return <div className={styles.container}>Table1Raw</div>;
};

export default Table1Raw;
