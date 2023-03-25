import React from 'react';
import styles from './Other1Raw.module.css';

export interface IOther1Raw {}

const Other1Raw: React.FC<IOther1Raw> = () => {
  return <div className={styles.container}>Other1Raw</div>;
};

export default Other1Raw;
