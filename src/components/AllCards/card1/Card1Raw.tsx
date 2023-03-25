import React from 'react';
import styles from './Card1Raw.module.css';

export interface ICard1Raw {}

const Card1Raw: React.FC<ICard1Raw> = () => {
  return <div className={styles.container}>Card1Raw</div>;
};

export default Card1Raw;
