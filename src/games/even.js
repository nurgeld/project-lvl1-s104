import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const isEven = num => num % 2 === 0;

const ruleForEven = 'Answer "yes" if number even otherwise answer "no"';

export const even = () => {
  const question = getRandNum(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameLogic(cons(ruleForEven, even));
