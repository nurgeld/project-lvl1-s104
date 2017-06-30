import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForBalance = 'Balance the given number.';

const balance = (number) => {
  const strNum = String(number);
  let array = [];
  for (let i = 0; i < strNum.length; i += 1) {
    array.push(strNum[i]);
  }
  const sortedArray = array.sort();
  let max = sortedArray[strNum.length - 1];
  let min = sortedArray[0];
  if (max - min <= 1) {
    return Number(); // здесь надо как-то обратно запаковать массив в строку
  }
  max -= 1;
  min += 1;
  return ; // похоже нужна рекурсия, чтобы снова запустить сортировку и проверку на max - min <= 1

  // const isBalance = num => max - min <= 1;
};

export const balanceGame = () => {
  const num = getRandNum(1000) + 1;
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForBalance, balanceGame));
