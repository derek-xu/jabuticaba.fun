import { useState, useEffect } from 'react'
import { questions, fairAnswers } from './questions.js'
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleAnswer = (answer) => {
    setSelectedOption(answer)
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }))
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
    }, 250) 
  }

  // Reset selectedOption whenever currentQuestion changes
  useEffect(() => {
    setSelectedOption(null)
  }, [currentQuestion])



  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setSelectedOption(null)
  }

  const getFairnessScore = () => {
    let score = 0
    Object.values(answers).forEach((answer, index) => {
      if (answer === fairAnswers[index]) {
        score++
      }
    })
    return score
  }

  const getCategoryScores = () => {
    const categories = {}
    questions.forEach((q, index) => {
      if (!categories[q.category]) {
        categories[q.category] = { total: 0, correct: 0 }
      }
      categories[q.category].total++
      if (answers[index] === "Not Fair") {
        categories[q.category].correct++
      }
    })
    return categories
  }

  if (showResults) {
    const score = getFairnessScore()
    const percentage = ((score / questions.length) * 100).toFixed(2)
    const categoryScores = getCategoryScores()
    
    return (
      <div className="quiz-container">
        <h1>Quiz Results</h1>
        <div className="results">
          <h2>Your Fairness Score: {score}/{questions.length}</h2>
          <p className="percentage">{percentage}%</p>
          <div className="score-message">
            {percentage >= 80 && <p>Excellent! You have a strong sense of fairness.</p>}
            {percentage >= 60 && percentage < 80 && <p>Good! You generally recognize unfair situations.</p>}
            {percentage >= 40 && percentage < 60 && <p>Fair. You have room to improve your fairness awareness.</p>}
            {percentage < 40 && <p>Consider reflecting on what fairness means to you.</p>}
          </div>
          
          <div className="category-breakdown">
            <h3>Breakdown by Category:</h3>
            {Object.entries(categoryScores).map(([category, scores]) => (
              <div key={category} className="category-score">
                <h4>{category}</h4>
                <p>{scores.correct}/{scores.total} questions correct</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={resetQuiz} className="reset-btn">Take Quiz Again</button>
      </div>
    )
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
              className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
