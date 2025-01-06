import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const NumberCounter = ({ start = 0, end = 100, duration = 2 }) => {
  const numberRef = useRef(null);
  const [currentNumber, setCurrentNumber] = useState(start);

  useEffect(() => {
    const updateNumber = (value: number) => setCurrentNumber(Math.round(value));

    gsap.to(numberRef.current, {
      innerText: end,
      duration,
      ease: "power1.out",
      onUpdate: function () {
        updateNumber(this.targets()[0].innerText);
      },
      snap: { innerText: 1 }, // Ensure numbers are whole during animation
    });
  }, [start, end, duration]);

  return (
    <div >
      <span ref={numberRef}>{currentNumber}</span>
    </div>
  );
};

export default NumberCounter;
