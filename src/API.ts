import axios from 'axios';
import { shuffle } from './utils';
import { Difficulty, Question } from './TYPES';

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const { data } = await axios.get(endpoint);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffle([...question.incorrect_answers, question.correct_answer]),
  }));
};
