import { useEffect, useRef } from "react";
import transformNumbers from "../utils/transformNumbers";

function MinCard({ time, flip, setFlip, flipHour, hourTime, setTime }) {
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
    let currentTime = topRef.current.innerText - 1;

    if (currentTime === 0) {
      if (hourTime === 0 && currentTime === 0) {
        setTime(currentTime);
      } else {
        currentTime = 59;
      }
      flipHour();
    }

    const minutes = transformNumbers(currentTime);

    topRef.current.innerText = minutes;
    bottomRef.current.innerText = minutes;
    flipTopRef.current.innerText = minutes;
    flipBottomRef.current.innerText = minutes;
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

export default MinCard;