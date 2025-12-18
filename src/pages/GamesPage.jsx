import { Link } from "react-router-dom";
import "./LandingPage.css";

function GamesPage() {
  const games = [
    {
      id: 1,
      title: "The Fairness Quiz",
      description: "Explore your concept of fairness through thought-provoking scenarios",
      link: "/fairnessquiz",
      available: false,
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "A new interactive experience is being crafted",
      link: "#",
      available: false,
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Something exciting is in development",
      link: "#",
      available: false,
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "Stay tuned for more engaging content",
      link: "#",
      available: false,
    },
  ];

  const renderItem = (item) => (
    <div key={item.id} className={`collection-item ${!item.available ? 'coming-soon' : ''}`}>
      {item.available ? (
        <Link to={item.link} className="collection-link">
          <div className="collection-content">
            <h2 className="collection-title">{item.title}</h2>
            <p className="collection-description">{item.description}</p>
          </div>
        </Link>
      ) : (
        <div className="collection-content">
          <h2 className="collection-title">{item.title}</h2>
          <p className="collection-description">{item.description}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="landing-container">
      <Link to="/" className="back-link">← Back</Link>
      <div className="landing-header">
        <h1 className="landing-title">Games</h1>
        <p className="landing-subtitle">
          Thoughtful games and interactive experiences
        </p>
      </div>
      
      <div className="collection-grid">
        {games.map(renderItem)}
      </div>
    </div>
  );
}

export default GamesPage;

