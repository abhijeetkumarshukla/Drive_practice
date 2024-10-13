import { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return;
    
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
 
    return () => clearInterval(timerId);
  }, [timeLeft]);
 
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
