import React from 'react';
import styles from './User1Raw.module.css';

export interface IUser1Raw {}

const User1Raw: React.FC<IUser1Raw> = () => {
  return <div className={styles.container}>User1Raw</div>;
};

export default User1Raw;
