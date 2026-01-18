import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correctAnswer: 3
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useContext", "useState", "useRef"],
    correctAnswer: 2
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 2
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (selected === questions[index].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setSelected(null);

    if (index + 1 < questions.length) {
      setIndex(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <main className="container">
      <section className="card">
        <header className="card-header">
          <h1>Quiz Application</h1>
        </header>

        {completed ? (
          <section className="result">
            <h2>Result</h2>
            <p>
              You scored <strong>{score}</strong> out of{" "}
              <strong>{questions.length}</strong>
            </p>
            <button className="btn" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </section>
        ) : (
          <section>
            <p className="progress">
              Question {index + 1} of {questions.length}
            </p>

            <h2 className="question">
              {questions[index].question}
            </h2>

            <form className="options">
              {questions[index].options.map((option, i) => (
                <label
                  key={i}
                  className={`option ${selected === i ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={i}
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </form>

            <button
              className="btn"
              disabled={selected === null}
              onClick={handleNext}
            >
              {index === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </section>
        )}
      </section>
    </main>
  );
}
