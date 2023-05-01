export const Code3: string = `

`;

export const RawCode3: string = `
import React from 'react';
import styles from './Other3Raw.module.css';

export interface IOther3Raw {}

const Other3Raw: React.FC<IOther3Raw> = () => {
  return <button className={styles.button}>Click me!</button>;
};

export default Other3Raw;


`;

export const RawCss3: string = `
.button {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff; /* updated to white */
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
}

.button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #fff; /* updated to white */
  transition: width 0.3s ease-out;
}

.button:hover::before {
  width: 100%;
}

`;
