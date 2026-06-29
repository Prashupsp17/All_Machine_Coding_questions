import React from 'react';
import { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    let interval;

    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

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
  }, [seconds, hours, minutes, isRunning]);

  return (
    <div className="App">
      <h6>CountDown Timer</h6>
      <input
        maxLength="2"
        style={{ width: "50px", height: "50px", textAlign: "center" }}
        placeholder="HH"
        min={0}
        type="number"
        value={hours}
        onChange={(e) => {
          let value = Number(e.target.value.slice(0, 2));
          if (value < 0) return;
          setHours(value);
        }}
      />
      <input
        min={0}
        maxLength="2"
        style={{ width: "50px", height: "50px", textAlign: "center" }}
        placeholder="MM"
        type="number"
        value={minutes}
        // type="number"
        onChange={(e) => {
          let value = Number(e.target.value.slice(0, 2));
          if (value < 0) return;
          if (value > 60) {
            setHours((h) => h + Math.floor(value / 60));
            setMinutes(value % 60);
          } else {
            setMinutes(value);
          }
        }}
      />
      <input
        min={0}
        maxLength="2"
        style={{ width: "50px", height: "50px", textAlign: "center" }}
        placeholder="SS"
        type="number"
        value={seconds}
        onChange={(e) => {
          let value = Number(e.target.value.slice(0, 2));
          if (value < 0) return;
          if (value > 60) {
            setMinutes((m) => m + Math.floor(value / 60));
            setSeconds(value % 60);
          } else {
            setSeconds(value);
          }
        }}
      />
      <br></br>
      {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")} <br></br>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default CountDownTimer;
