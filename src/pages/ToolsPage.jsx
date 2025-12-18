import { Link } from "react-router-dom";
import "./LandingPage.css";

function ToolsPage() {
  const tools = [
    {
      id: 1,
      title: "Pomodoro",
      description: "Stay focused",
      link: "/pomodoro",
      available: true,
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "A new tool is being crafted",
      link: "#",
      available: false,
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Another useful tool is in development",
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
        <h1 className="landing-title">Tools</h1>
        <p className="landing-subtitle">
          Useful tools I use everyday
        </p>
      </div>
      
      <div className="collection-grid">
        {tools.map(renderItem)}
      </div>
    </div>
  );
}

export default ToolsPage;

