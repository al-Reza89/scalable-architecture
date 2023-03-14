import React, { useState } from "react";
import styles from "@/styles/Input.module.css";

const InputBox: React.FC = () => {
  const [tsCode, setTsCode] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");

  const displayCode = () => {
    setDisplayedCode(tsCode);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(displayedCode);
    alert("Code Copied to Clipboard!");
  };

  return (
    <div className={styles.inputBox}>
      <h1>TypeScript Code Display and Copy</h1>
      <textarea value={tsCode} onChange={(e) => setTsCode(e.target.value)} />
      <br />
      <button onClick={displayCode}>Display Code</button>
      <br />
      <br />
      <pre className={styles.displayedCode}>{displayedCode}</pre>
      <br />
      <button className={styles.button} onClick={copyCode}>
        Copy Code
      </button>
    </div>
  );
};

export default InputBox;
