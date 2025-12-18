import React, { useEffect, useRef, useState } from "react";
import ClockDisplay from "./ClockDisplay";

function formatTime(secs) {
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  const hh = Math.floor(secs / 3600);
  return hh > 0 ? `${String(hh).padStart(2, "0")}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function TimerCard() {
  const DEFAULT_MIN = 25;
  const [minutes, setMinutes] = useState(DEFAULT_MIN);
  const [durationSecs, setDurationSecs] = useState(DEFAULT_MIN * 60);
  const [remaining, setRemaining] = useState(DEFAULT_MIN * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(() => {
    try {
      const raw = localStorage.getItem("pomodoro.sessions");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    setDurationSecs(minutes * 60);
    if (!isRunning) setRemaining(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            const finishedAt = Date.now();
            const newSession = { length: durationSecs, finishedAt };
            setSessions((s) => {
              const updated = [newSession, ...s].slice(0, 10);
              try { localStorage.setItem("pomodoro.sessions", JSON.stringify(updated)); } catch {}
              return updated;
            });
            return 0;
          }
          return r - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
    return undefined;
  }, [isRunning, durationSecs]);

  function start() {
    if (remaining <= 0) setRemaining(durationSecs);
    setIsRunning(true);
  }
  function pause() {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }
  function reset() {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemaining(durationSecs);
  }

  function setPreset(mins) {
    setMinutes(mins);
  }

  function handleMinutesChange(e) {
    const v = Number(e.target.value);
    if (!Number.isFinite(v) || v < 1) return;
    setMinutes(Math.round(v));
  }

  return (
    <section className="timer-card">
      <div className="timer-header">
        <ClockDisplay />
      </div>

      <div className="timer-display" aria-live="polite">
        <div className="time-readout">{formatTime(remaining)}</div>
      </div>

      <div className="duration-row">
        <div className="duration-label">Duration</div>
        <div className="preset-buttons">
          {[25, 50, 15].map((p) => (
            <button
              key={p}
              className={`preset-btn ${p === minutes ? "active" : ""}`}
              onClick={() => setPreset(p)}
              onMouseUp={(e) => e.currentTarget.blur()}
              onTouchEnd={(e) => e.currentTarget.blur()}
              aria-pressed={p === minutes}
            >
              {p}m
            </button>
          ))}
        </div>
      </div>

      <div className="controls-row">
        {!isRunning ? (
          <button className="control-btn start" onClick={start} onMouseUp={(e) => e.currentTarget.blur()} onTouchEnd={(e) => e.currentTarget.blur()}>Start</button>
        ) : (
          <button className="control-btn pause" onClick={pause} onMouseUp={(e) => e.currentTarget.blur()} onTouchEnd={(e) => e.currentTarget.blur()}>Pause</button>
        )}
        <button className="control-btn reset" onClick={reset} onMouseUp={(e) => e.currentTarget.blur()} onTouchEnd={(e) => e.currentTarget.blur()}>Reset</button>
      </div>

      <div className="session-list">
        <h4>Recent sessions</h4>
        {sessions.length === 0 ? (
          <p className="muted">No sessions yet</p>
        ) : (
          <ul>
            {sessions.map((s, i) => (
              <li key={i}>{new Date(s.finishedAt).toLocaleString()} — {Math.round(s.length/60)}m</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
