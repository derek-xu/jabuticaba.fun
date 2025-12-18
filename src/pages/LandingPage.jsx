import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1 className="landing-title">Jabuticaba</h1>
        <p className="landing-subtitle">
          A collection of thoughtful games and useful tools
        </p>
      </div>
      
      <div className="category-buttons">
        <Link to="/tools" className="category-btn">
          <h2 className="category-btn-title">Tools</h2>
          <p className="category-btn-description">Useful tools to help you stay productive</p>
        </Link>
        <Link to="/games" className="category-btn">
          <h2 className="category-btn-title">Games</h2>
          <p className="category-btn-description">Thoughtful games and interactive experiences</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
  