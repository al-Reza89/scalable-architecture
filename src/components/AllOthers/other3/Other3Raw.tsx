import React from 'react';
import styles from './Other3Raw.module.css';

export interface IOther3Raw {}

const Other3Raw: React.FC<IOther3Raw> = () => {
  return <button className={styles.button}>Click me!</button>;
};

export default Other3Raw;
