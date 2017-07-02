import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForProgression = 'What number is missing in this progression?';

const progression = () => {
  const a1 = getRandNum(10) + 5;
  const d = getRandNum(10) + 1;
  const n = 10;
  const randIndex = getRandNum(10);
  const array = [];
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    array[i - 1] = a1 + ((i - 1) * d);
  }
  const answer = array[randIndex];
  array[array.indexOf(answer)] = '..';
  for (let i = 0; i < n; i += 1) {
    str += `${array[i]} `;
  }
  const question = str;
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForProgression, progression));
