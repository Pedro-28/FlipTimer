
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function TimerForm() {
  const navigate = useNavigate();
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });

  const handleTime = ({ target }) => {
    const { id, value } = target;
    let timeValue = value;

    if (value < 0) {
      timeValue = 0;
    } else if (id === 'hour' && value > 99) {
      timeValue = 99;
    } else if (value > 59 && (id === 'min' || id === 'sec')) {
      timeValue = 59;
    }
    setTime({ ...time, [id]: Number(timeValue) });
  }

  const handleFocus = ({ target }) => target.select();

  const handleSubmit = () => {
    const timeValues = Object.values(time);
    return timeValues.every((n) => n === 0);
  };

  return (
    <div className="timer-form-container">
      <form onSubmit={() => navigate('/timer', { state: time })} className="form-container">
        <h1>Flip <span>timer</span></h1>
        <div className="label-wrapper">
          <label htmlFor="hour" className="label-container">
            Hour
            <input type="number" id="hour" onChange={handleTime} value={time.hour} onFocus={handleFocus} max={99} />
          </label>

          <label htmlFor="min" className="label-container">
            Minutes
            <input type="number" id="min" onChange={handleTime} value={time.min} onFocus={handleFocus} max={59} />
          </label>

          <label htmlFor="sec" className="label-container">
            Seconds
            <input type="number" id="sec" onChange={handleTime} value={time.sec} onFocus={handleFocus} max={59} />
          </label>
        </div>

        <button type="submit" className='button-container' disabled={handleSubmit()}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text">Start</span>
        </button>
      </form>
    </div>
  );
}

export default TimerForm;