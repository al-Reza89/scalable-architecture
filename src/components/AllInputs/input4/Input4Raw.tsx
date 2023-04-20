import React, { useState } from 'react';
import styles from './Input4Raw.module.css';

export interface IInput4Raw {}

const Input4Raw: React.FC<IInput4Raw> = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValid(validateEmail(emailValue));
  };

  const handleInputClick = () => {
    setIsClicked(true);
    console.log({ email: email });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <label htmlFor="email" className={styles.labelStyles}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        onClick={handleInputClick}
        className={`${styles.inputStyles} ${
          isValid ? styles.valid : styles.errorStyles
        } ${isClicked ? 'inputStylesClicked' : ''}`}
      />
      {!isValid && <p className={styles.errorStyles}>Invalid email</p>}
    </div>
  );
};

export default Input4Raw;
