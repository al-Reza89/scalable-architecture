import React from 'react';
import styles from './Header2Raw.module.css';

export interface IHeader2Raw {}

const Header2Raw: React.FC<IHeader2Raw> = () => {
  return <div className={styles.container}>Header2Raw</div>;
};

export default Header2Raw;
