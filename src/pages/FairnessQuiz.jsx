import { useState, useEffect } from "react";
import { questions } from "../global/questions.js";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import "../App.css";

function FairnessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [_answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Type tracking variables
  const [meritocraticScore, setMeritocraticScore] = useState(0);
  const [egalitarianScore, setEgalitarianScore] = useState(0);
  const [capitalMaximistScore, setCapitalMaximistScore] = useState(0);
  const [balancerScore, setBalancerScore] = useState(0);
  const [protectorScore, setProtectorScore] = useState(0);
  const [pragmatistScore, setPragmatistScore] = useState(0);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));

    // Update type scores based on the question's typeScores
    const scoreUpdates = questions[currentQuestion].typeScores?.[answer];

    if (scoreUpdates) {
      if (scoreUpdates.meritocratic)
        setMeritocraticScore((prev) => prev + scoreUpdates.meritocratic);
      if (scoreUpdates.egalitarian)
        setEgalitarianScore((prev) => prev + scoreUpdates.egalitarian);
      if (scoreUpdates.capitalMaximist)
        setCapitalMaximistScore((prev) => prev + scoreUpdates.capitalMaximist);
      if (scoreUpdates.balancer)
        setBalancerScore((prev) => prev + scoreUpdates.balancer);
      if (scoreUpdates.protector)
        setProtectorScore((prev) => prev + scoreUpdates.protector);
      if (scoreUpdates.pragmatist)
        setPragmatistScore((prev) => prev + scoreUpdates.pragmatist);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 250);
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
    // Reset type scores
    setMeritocraticScore(0);
    setEgalitarianScore(0);
    setCapitalMaximistScore(0);
    setBalancerScore(0);
    setProtectorScore(0);
    setPragmatistScore(0);
  };

  const getTopType = () => {
    const scores = [
      { type: "Meritocrat", score: meritocraticScore },
      { type: "Egalitarian", score: egalitarianScore },
      { type: "Capital Maximist", score: capitalMaximistScore },
      { type: "Balancer", score: balancerScore },
      { type: "Protector", score: protectorScore },
      { type: "Pragmatist", score: pragmatistScore },
    ];
    return scores.reduce((max, current) =>
      current.score > max.score ? current : max
    );
  };

  const getTypeScores = () => {
    return [
      { type: "Meritocrat", score: meritocraticScore },
      { type: "Egalitarian", score: egalitarianScore },
      { type: "Capital Maximist", score: capitalMaximistScore },
      { type: "Balancer", score: balancerScore },
      { type: "Protector", score: protectorScore },
      { type: "Pragmatist", score: pragmatistScore },
    ];
  };

  if (showResults) {
    const topType = getTopType();
    const typeScores = getTypeScores();

    // Prepare data for radar chart
    const chartData = typeScores.map((item) => ({
      type: item.type,
      score: item.score,
      fullMark: Math.max(...typeScores.map((t) => t.score)) || 10,
    }));

    return (
      <div className="quiz-container">
        <h1>Quiz Results</h1>
        <div className="results">
          <p className="fairness-label">Your Fairness Type:</p>
          <h2 className="fairness-type">{topType.type}</h2>
          <div className="score-message">
            <p>
              Based on your answers, you align most closely with the{" "}
              {topType.type} fairness perspective.
            </p>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={chartData}>
                <PolarGrid gridType="polygon" radialLines={true} />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, "dataMax"]}
                  tick={false}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#667eea"
                  fill="#667eea"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <button onClick={resetQuiz} className="reset-btn">
          Take Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Fairness Quiz</h1>
      <p className="intro">
        This is a quiz to test your concept of fairness.
        <br></br>
        You will be asked a series of questions about fairness.
      </p>

      <div className="question-container">
        <div className="progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="category-label">
          {questions[currentQuestion].category}
        </div>

        <h2 className="question">{questions[currentQuestion].question}</h2>

        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={`${currentQuestion}-${index}`}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${
                selectedOption === option ? "selected" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FairnessQuiz;
