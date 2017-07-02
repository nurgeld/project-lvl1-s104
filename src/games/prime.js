import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForPrime = 'Is it prime number?';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const num = getRandNum(100) + 1;
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForPrime, primeGame));
