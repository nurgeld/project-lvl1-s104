import { cons } from 'hexlet-pairs';
import gameLogic, { setRandNum } from '..';

const ruleForGcd = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// const firstNum = setRandNum(100);
// const secondNum = setRandNum(100);
// const question = `${firstNum} ${secondNum}`;

const gcdGame = () => {
  const firstNum = setRandNum(100);
  const secondNum = setRandNum(100);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForGcd, gcdGame));
