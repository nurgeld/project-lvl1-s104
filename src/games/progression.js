import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForProgression = 'What number is missing in this progression?';

const generateProgression = () => {
  const a1 = getRandNum(10) + 5;
  const d = getRandNum(10) + 1;
  const n = 10;
  const randIndex = getRandNum(10) + 1;
  let str = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === randIndex) {
      str += '.. ';
    } else {
      str += `${a1 + ((i - 1) * d)} `;
    }
  }
  const question = str;
  const answer = a1 + ((randIndex - 1) * d);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForProgression, generateProgression));
