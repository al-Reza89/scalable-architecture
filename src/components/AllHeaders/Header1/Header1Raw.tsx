import React from 'react';
import styles from './Header1Raw.module.css';

export interface IHeader1Raw {}

const Header1Raw: React.FC<IHeader1Raw> = () => {
  return <div className={styles.container}>Header1Raw</div>;
};

export default Header1Raw;
