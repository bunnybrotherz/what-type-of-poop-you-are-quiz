import { useMemo, useState } from "react";
import questions from "../data/questions.json";
import archetypes from "../data/archetypes.json";
import ResultCard from "./ResultCard";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState(() =>
    archetypes.reduce((acc, type) => ({ ...acc, [type.id]: 0 }), {})
  );
  const [completed, setCompleted] = useState(false);

  const question = questions[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  const topArchetype = useMemo(() => {
    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const [winnerId] = ranked[0] || [archetypes[0].id];
    return archetypes.find((type) => type.id === winnerId) || archetypes[0];
  }, [scores]);

  const handleChoice = (targetTypeId) => {
    setScores((prev) => ({
      ...prev,
      [targetTypeId]: prev[targetTypeId] + 1,
    }));

    if (currentIndex === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScores(archetypes.reduce((acc, type) => ({ ...acc, [type.id]: 0 }), {}));
    setCompleted(false);
  };

  if (completed) {
    return <ResultCard archetype={topArchetype} onRestart={restartQuiz} />;
  }

  return (
    <section className="quiz-body">
      <div className="progress-row" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <h2>{question.prompt}</h2>
      <div className="choices-grid">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            type="button"
            className="choice-btn"
            onClick={() => handleChoice(choice.typeId)}
          >
            <span className="choice-text">{choice.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Quiz;
