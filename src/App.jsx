import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FairnessQuiz from "./pages/FairnessQuiz";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fairnessquiz" element={<FairnessQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
