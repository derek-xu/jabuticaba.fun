import React, { useEffect, useState } from "react";

export default function ClockDisplay() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString();

  return <div className="pomodoro-clock" aria-hidden="false">{time}</div>;
}
