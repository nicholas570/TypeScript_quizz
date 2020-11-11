import React, { useState } from 'react';

import { Difficulty, fetchQuestions } from './API';

import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const startQuizz = async () => {};

  const checKAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className='App'>
      <h1>React Quizz</h1>
      <button type='button' className='start' onClick={startQuizz}>
        Start
      </button>
      <p className='score'>Score: </p>
      <p>Loading questions...</p>
      <QuestionCard
        questionNumber={number + 1}
        totalquestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers && userAnswers[number]}
        callback={checKAnswer}
      />
      <button type='button' className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
