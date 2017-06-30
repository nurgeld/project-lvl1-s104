import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForGcd = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const gcdGame = () => {
  const firstNum = getRandNum(100) + 1;
  const secondNum = getRandNum(101) + 1;
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForGcd, gcdGame));
