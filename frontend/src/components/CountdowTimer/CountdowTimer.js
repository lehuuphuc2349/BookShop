import React, { useEffect, useState } from "react";

const countdown = () => {
  let now = new Date("19/04/2022");
  let difference = now - new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};
function CountdowTimer() {
  const [timeLeft, setTimeLeft] = useState(countdown);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(countdown);
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default CountdowTimer;
