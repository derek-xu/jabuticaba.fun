import { Link } from "react-router-dom";
import "../App.css";

function PomodoroTimer() {
  return (
    <div className="quiz-container">
      <Link to="/" className="back-link">← Back to Collection</Link>
      <h1>Pomodoro</h1>
      <p className="intro">
        A focus timer to help you stay productive.
        <br></br>
        Work in focused intervals with breaks.
      </p>

      <div className="question-container">
        <div className="pomodoro-content">
          <h2 className="pomodoro-title">Timer Coming Soon</h2>
          <p className="pomodoro-description">
            The pomodoro timer functionality will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;

