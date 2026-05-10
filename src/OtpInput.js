import React from 'react';
import { useState, useEffect, useRef } from 'react';

const OtpInput = () => {
  const refArr = useRef([]);
  const initialRender = () => Array(6).fill('');
  const [inputArr, setInputArr] = useState(initialRender());
  console.log(inputArr);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    let newValue = value.trim();
    let newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === 'Backspace') {
      refArr.current[index - 1].focus();
    }
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  return (
    <div>
      <h1>Otp Input</h1>
      {inputArr &&
        inputArr.map((input, index) => {
          return (
            <input
              key={index}
              ref={(input) => (refArr.current[index] = input)}
              style={{
                textAlign: 'center',
                width: '50px',
                fontSize: '20px',
                fontWeight: 'bold',
                height: '50px',
              }}
              value={inputArr[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
    </div>
  );
};
export default OtpInput;
