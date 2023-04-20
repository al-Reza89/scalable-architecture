import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

const MultiSelect: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedOptions(selectedValues);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        multiple
        value={selectedOptions}
        onChange={handleOptionSelect}
        className="w-full p-2 text-white bg-gray-700 rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default MultiSelect;
