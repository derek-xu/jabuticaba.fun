import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const items = [
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
      description: "More thoughtful games and quizzes are on the way",
      link: "#",
      available: true,
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "A new interactive experience is being crafted",
      link: "#",
      available: false,
    },
    {
      id: 4,
      title: "Coming Soon",
      description: "Something exciting is in development",
      link: "#",
      available: false,
    },
    {
      id: 5,
      title: "Coming Soon",
      description: "Stay tuned for more engaging content",
      link: "#",
      available: false,
    },
    {
      id: 6,
      title: "Coming Soon",
      description: "Another thoughtful creation is on its way",
      link: "#",
      available: false,
    },
  ];

  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1 className="landing-title">Jabuticaba</h1>
        <p className="landing-subtitle">
          A collection of thoughtful games and quizzes
        </p>
      </div>
      <div className="collection-grid">
        {items.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
