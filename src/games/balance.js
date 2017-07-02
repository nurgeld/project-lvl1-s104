import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForBalance = 'Balance the given number.';

const balance = (number) => {
  const strNum = String(number);
  const array = [];
  let str = '';
  for (let i = 0; i < strNum.length; i += 1) {
    array[i] = Number(strNum[i]);
  }
  const max = Math.max(...array);
  const min = Math.min(...array);
  if (max - min <= 1) {
    return number;
  }
  array[array.indexOf(max)] = max - 1;
  array[array.indexOf(min)] = min + 1;
  array.sort();
  for (let i = 0; i < strNum.length; i += 1) {
    str += array[i];
  }
  const newNum = Number(str);
  return balance(newNum);
};

export const balanceGame = () => {
  const num = getRandNum(1000) + 1;
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForBalance, balanceGame));
