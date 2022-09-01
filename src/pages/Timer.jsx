import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import HourCard from '../components/HourCard';
import MinCard from '../components/MinCard';
import SecCard from '../components/SecCard';

function Timer() {
  const location = useLocation();
  const { hour, min, sec } = location.state;
  const [flipSec, setFlipSec] = useState(false);
  const [flipMin, setFlipMin] = useState(false);
  const [flipHour, setFlipHour] = useState(false);
  const [timeSec, setTimeSec] = useState(sec);
  const [timeMin, setTimeMin] = useState(min);
  const [timeHour, setTimeHour] = useState(hour);
  const [timeInterval, setTimeInterval] = useState(null);

  useEffect(() => {
    // const { hour, min, sec } = location.state;
    // setTimeHour(hour);
    // setTimeMin(min);
    // setTimeSec(sec);
    const intervalNum = setInterval(() => {
      setFlipSec((oldFlip) => !oldFlip);
    }, 1000);
    setTimeInterval(intervalNum);
  }, []);

  const handleHourFlip = () => {
    if (timeHour > 0) setFlipHour(true);
  }

  const handleTimerEnd = (sec) => {
    if (timeHour === 0 && timeMin === 0 && sec === 0) {
      clearInterval(timeInterval);
      // alert('acabou');
      return false;
    }

    return true;
  }

  return (
    <div className="app">
      <HourCard time={timeHour} flip={flipHour} setFlip={setFlipHour} setTime={setTimeHour} />

      <MinCard
        flipHour={handleHourFlip}
        hourTime={timeHour}
        time={timeMin}
        flip={flipMin}
        setFlip={setFlipMin}
        setTime={setTimeMin} />

      <SecCard
        flipMin={() => setFlipMin(true)}
        time={timeSec}
        flip={flipSec}
        setFlip={setFlipSec}
        handleTimerEnd={handleTimerEnd} />
    </div>
  );
}

export default Timer;