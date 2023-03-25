import React from 'react';
import styles from './Template1Raw.module.css';

export interface IFooter1Raw {}

const Footer1Raw: React.FC<IFooter1Raw> = () => {
  return <div className={styles.container}>Footer1Raw</div>;
};

export default Footer1Raw;
