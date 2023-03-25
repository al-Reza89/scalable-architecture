import React from 'react';
import styles from './Stat1Raw.module.css';

export interface IStat1Raw {}

const Stat1Raw: React.FC<IStat1Raw> = () => {
  return <div className={styles.container}>Stat1Raw</div>;
};

export default Stat1Raw;
