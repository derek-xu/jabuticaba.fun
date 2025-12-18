import React from "react";
import { Link } from "react-router-dom";
import TimerCard from "../components/TimerCard";
import "./PomodoroTimer.css";

function PomodoroTimer() {
  return (
    <div className="pomodoro-page">
      <Link to="/" className="back-link">← Back to Collection</Link>

      <header className="pomodoro-header">
        <h1 className="landing-title">Pomodoro</h1>
        <p className="landing-subtitle">Focus timer</p>
      </header>

      <main className="pomodoro-main">
        <TimerCard />
      </main>
    </div>
  );
}

export default PomodoroTimer;

