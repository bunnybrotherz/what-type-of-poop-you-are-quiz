import Quiz from "./components/Quiz";

function App() {
  return (
    <main className="app-shell">
      <section className="quiz-panel" aria-label="Poop quiz">
        <header className="quiz-header">
          <p className="eyebrow">PERSONALITY QUIZ</p>
          <h1>Which Poop Attachment Style Are You?</h1>
          <p>
            Ten fast questions. Zero scientific validity. Disturbingly accurate vibe check.
          </p>
        </header>
        <Quiz />
      </section>
    </main>
  );
}

export default App;
