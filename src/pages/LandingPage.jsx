import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Jabuticaba</h1>
        <p className="landing-subtitle">
          A collection of thoughtful games and quizzes
        </p>
        <Link to="/fairnessquiz" className="start-quiz-btn">
          The Fairness Quiz
        </Link>
        <Link className="start-quiz-btn"> More to Come</Link>
      </div>
    </div>
  );
}

export default LandingPage;
