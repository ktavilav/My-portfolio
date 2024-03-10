import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const Chronometer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <section className="todo-list-container" id="price">
      <div className="container">
        <h2 className="mb-5 pb-4"><span className="text-danger">Pomodoro</span> technique</h2>
    <div className="pomodoro-container">
      <p className="timer">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
      <button className="timer-button" onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
    </div>
    </section>
  );
};

export default Chronometer;
