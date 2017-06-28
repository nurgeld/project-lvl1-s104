import { cons } from 'hexlet-pairs';
import gameLogic, { setRandNum } from '..';

const isEven = num => num % 2 === 0;

const ruleForEven = 'Answer "yes" if number even otherwise answer "no"\n';

export const even = () => {
  const question = setRandNum(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameLogic(cons(ruleForEven, even));
