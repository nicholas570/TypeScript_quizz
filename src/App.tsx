import React, { useState } from 'react';
import { fetchQuestions } from './API';
import { Difficulty, QuestionsState, AnswerObject } from './TYPES';

import QuestionCard from './components/QuestionCard';

import { GlobalStyle, Wrapper, Wave } from './css/app.styles';

const TOTAL_QUESTIONS = 10;

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuizz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const checKAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className='App'>
          {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
            <button type='button' className='start' onClick={startQuizz}>
              {userAnswers.length === TOTAL_QUESTIONS ? 'Play again' : 'Start'}
            </button>
          )}
          <p className='score'>Score: {score} </p>
          {loading && <p>Loading questions...</p>}
          {!loading && !gameOver && (
            <QuestionCard
              questionNumber={number + 1}
              totalquestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers && userAnswers[number]}
              callback={checKAnswer}
            />
          )}

          {!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1 && (
              <button className='next' onClick={nextQuestion}>
                Next Question
              </button>
            )}
        </div>
      </Wrapper>
      <Wave>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
          <path
            fill='#7260D9'
            fill-opacity='1'
            d='M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,165.3C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
        </svg>
      </Wave>
    </>
  );
}

export default App;
