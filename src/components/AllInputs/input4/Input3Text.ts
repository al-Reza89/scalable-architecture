export const Code3: string = `
import React, { useEffect, useState } from 'react';
import styles from './Input1Raw.module.css';

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptons() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <div className={styles.value}>{value?.label}</div>
      <button
        onClick={(e) => {
          //  parent div er onclick ke care kore na
          e.stopPropagation();
          clearOptons();
        }}
        className={styles['close-btn']}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={\`\${styles.options} \${isOpen ? styles.show : ''}\`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={\`\${styles.option} \${
              isOptionSelected(option) ? styles.selected : ''
            } \${index === highlightedIndex ? styles.highlighted : ''}  \`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const options = [
  {
    label: 'First',
    value: 1,
  },
  {
    label: 'Second',
    value: 2,
  },
  {
    label: 'Third',
    value: 3,
  },
  {
    label: 'Fourth',
    value: 4,
  },
  {
    label: 'Fifth',
    value: 5,
  },
];

export interface IInput1Raw {}

const Input1Raw: React.FC<IInput1Raw> = () => {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <div className="">
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </div>
  );
};

export default Input1Raw;

`;

export const RawCode3: string = `
import React, { useEffect, useState } from 'react';
import styles from './Input1Raw.module.css';

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptons() {
    onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <div className={styles.value}>{value?.label}</div>
      <button
        onClick={(e) => {
          //  parent div er onclick ke care kore na
          e.stopPropagation();
          clearOptons();
        }}
        className={styles['close-btn']}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={\`\${styles.options} \${isOpen ? styles.show : ''}\`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={\`\${styles.option} \${
              isOptionSelected(option) ? styles.selected : ''
            } \${index === highlightedIndex ? styles.highlighted : ''}  \`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const options = [
  {
    label: 'First',
    value: 1,
  },
  {
    label: 'Second',
    value: 2,
  },
  {
    label: 'Third',
    value: 3,
  },
  {
    label: 'Fourth',
    value: 4,
  },
  {
    label: 'Fifth',
    value: 5,
  },
];

export interface IInput1Raw {}

const Input1Raw: React.FC<IInput1Raw> = () => {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <div className="">
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </div>
  );
};

export default Input1Raw;

`;

export const RawCss3: string = `
.container {
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;
}

.container:focus {
  border-color: hsl(200, 100%, 50%);
}

.value {
  flex-grow: 1;
}

.close-btn {
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;
}

.close-btn:focus,
.close-btn:hover {
  color: #333;
}

.divider {
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
}

.caret {
  translate: 0 25%;
  border: 0.25em solid transparent;
  border-top-color: #777;
}

.options {
  position: absolute;
  background: white;
  color: black;
  margin: 0;
  padding: 0;
  list-style: none;
  display: none;
  max-height: 15em;
  overflow-y: auto;
  border: 0.05em solid #777;
  border-radius: 0.25em;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  z-index: 100;
}

.options.show {
  display: block;
}

.option {
  padding: 0.25em 0.5em;
  cursor: pointer;
}

.option.selected {
  background-color: hsl(200, 100%, 70%);
}

.option.highlighted {
  background-color: hsl(200, 100%, 50%);
  color: white;
}
  
`;
