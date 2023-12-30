import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [quenstions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Salviati Bank - Frequently Asked Questions</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
