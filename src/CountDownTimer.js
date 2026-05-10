import React from 'react';
import { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    let interval = null;

    interval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    if (seconds < 0) {
      if (minutes > 0) {
        setMinutes((m) => m - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours((h) => h - 1);
        setMinutes(59);
        setSeconds(59);
      } else {
        setIsRunning(false);
        setSeconds(0);
      }
    }
  }, [seconds, minutes, hours, isRunning]);
  return (
    <div>
      <input
        style={{ width: '30px', height: '30px' }}
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
      />
      <input
        style={{ width: '30px', height: '30px' }}
        value={minutes}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (value > 60) {
            setHours((h) => h + Math.floor(h / 60));
            setMinutes(value % 60);
          } else {
            setMinutes(value);
          }
        }}
      />
      <input
        style={{ width: '30px', height: '30px' }}
        value={seconds}
        onChange={(e) => {
          let value = Number(e.target.value);

          if (value > 60) {
            setMinutes((m) => m + Math.floor(m / 60));
            setSeconds(value % 60);
          } else {
            setSeconds(value);
          }
        }}
      />
      <br></br>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      {String(hours).padStart(2, '0')}: {String(minutes).padStart(2, '0')}:
      {String(seconds).padStart(2, '0')}
    </div>
  );
};
export default CountDownTimer;
