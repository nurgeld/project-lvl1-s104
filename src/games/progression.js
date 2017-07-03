import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForProgression = 'What number is missing in this progression?';

const elementOfProgression = (a1, d, n) => a1 + ((n - 1) * d);

const progressionGame = () => {
  const a1 = getRandNum(10) + 5;
  const d = getRandNum(10) + 1;
  const n = 10;
  const randIndex = getRandNum(10) + 1;
  let question = '';
  for (let i = 1; i <= n; i += 1) {
    question += (i === randIndex) ? '.. ' : `${elementOfProgression(a1, d, i)} `;
  }
  const answer = elementOfProgression(a1, d, randIndex);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForProgression, progressionGame));
