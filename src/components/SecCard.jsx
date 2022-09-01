import { useEffect, useRef } from "react";
import transformNumbers from "../utils/transformNumbers";

function TimeCard({ time, flip, setFlip, flipMin, handleTimerEnd }) {
  const topRef = useRef();
  const bottomRef = useRef();
  const flipTopRef = useRef();
  const flipBottomRef = useRef();

  useEffect(() => {
    const currentTime = transformNumbers(time);

    topRef.current.innerText = currentTime;
    bottomRef.current.innerText = currentTime;
    flipTopRef.current.innerText = currentTime;
    flipBottomRef.current.innerText = currentTime;
  }, []);

  const changeTimer = () => {
    let currentTime = Number(topRef.current.innerText);
    currentTime = currentTime ? currentTime - 1 : 0;

    if (currentTime === 0 && handleTimerEnd(currentTime)) {
      currentTime = 59;
      flipMin();
    }
    const seconds = transformNumbers(currentTime);

    topRef.current.innerText = seconds;
    bottomRef.current.innerText = seconds;
    flipTopRef.current.innerText = seconds;
    flipBottomRef.current.innerText = seconds;
  }

  return (
    <div className='flip-card'>
      <div ref={topRef} className='card-top'>00</div>
      <div ref={bottomRef} className='card-bottom'>00</div>

      <div
        ref={flipTopRef}
        onAnimationEnd={() => changeTimer()}
        className={flip ? 'card-top-flip flip-top' : 'card-top-flip'}
      >
        00
      </div>

      <div
        ref={flipBottomRef}
        onAnimationEnd={() => setFlip(false)}
        className={flip ? 'card-bottom-flip flip-bottom' : 'card-bottom-flip'}
      >
        00
      </div>
    </div>
  );
}

export default TimeCard;