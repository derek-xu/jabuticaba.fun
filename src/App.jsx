import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ToolsPage from "./pages/ToolsPage";
import GamesPage from "./pages/GamesPage";
import FairnessQuiz from "./pages/FairnessQuiz";
import PomodoroTimer from "./pages/PomodoroTimer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/fairnessquiz" element={<FairnessQuiz />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
      </Routes>
    </Router>
  );
}

export default App;
