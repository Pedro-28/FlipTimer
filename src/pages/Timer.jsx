import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import HourCard from '../components/HourCard';
import MinCard from '../components/MinCard';
import SecCard from '../components/SecCard';
import song from '../songs/nuclear_alarm.mp3';

function Timer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { hour, min, sec } = location.state;
  const [timeSec, setTimeSec] = useState(sec);
  const [timeMin, setTimeMin] = useState(min);
  const [timeHour, setTimeHour] = useState(hour);
  const [timeInterval, setTimeInterval] = useState(null);

  const handleTimer = () => {
    if (timeInterval) {
      clearInterval(timeInterval);
    }
    let timeInSec = (hour * 3600) + (min * 60) + sec;

    const intervalNum = setInterval(() => {

      const hours = Math.floor(timeInSec / 3600);
      const minutes = Math.floor((timeInSec / 60) % 60);
      const seconds = timeInSec % 60;

      timeInSec--;

      if (timeHour !== hours) {
        setTimeHour(hours);
      }

      if (timeMin !== minutes) {
        setTimeMin(minutes);
      }
      setTimeSec(seconds);
    }, 1000);

    setTimeInterval(intervalNum);
  }

  useEffect(() => {
    handleTimer();
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (timeHour === 0 && timeMin === 0 && timeSec === 0) {
      clearInterval(timeInterval);
      const audio = new Audio(song);
      audio.volume = 0.03;
      audio.play();
    }
  });

  return (
    <div className="flip-timer-container">
      <div className="clock-wrapper">
        <div className="clock-container">
          <div className="clock-top-container">
            <button
              type="button"
              className='button-container'
              onClick={() => {
                clearInterval(timeInterval);
                navigate('/');
              }}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">New Time</span>
            </button>

            <button
              type="button"
              className='button-container'
              onClick={() => window.location.reload()}
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Restart</span>
            </button>
          </div>
          <div className="clock-front-container">
            <div className="timer-wrapper">
              <HourCard time={timeHour} />

              <MinCard time={timeMin} />

              <SecCard time={timeSec} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Timer;
