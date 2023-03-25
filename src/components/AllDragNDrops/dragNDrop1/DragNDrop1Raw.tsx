import React from 'react';
import styles from './DragNDrop1Raw.module.css';

export interface IDragNDrop1Raw {}

const DragNDrop1Raw: React.FC<IDragNDrop1Raw> = () => {
  return <div className={styles.container}>DragNDrop1Raw</div>;
};

export default DragNDrop1Raw;
