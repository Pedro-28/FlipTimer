import { useEffect, useRef, useState } from "react";
import transformNumbers from "../utils/transformNumbers";

function MinCard({ time }) {
  const [flip, setFlip] = useState(false);
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

  useEffect(() => {
    setFlip(true);
  }, [time]);

  const changeTimer = () => {
    const minutes = transformNumbers(time);

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