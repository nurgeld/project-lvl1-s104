import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForBalance = 'Balance the given number.';

const balance = (number) => {
  //
  // let result = '';
  const strNum = String(number);
  const array = [];
  for (let i = 0; i < strNum.length; i += 1) {
    array.push(Number(strNum[i]));
  }
  const max = Math.max(...array); // прочитал на https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
  const min = Math.min(...array);
  //
  if (max - min > 1) {
    array[array.indexOf(max)] = max - 1;
    array[array.indexOf(min)] = min + 1;
  }
  const appendCurrent = (previousValue, currentValue) => previousValue + currentValue;
  const result = array.reduce(appendCurrent); // посмотрел по ссылке https://msdn.microsoft.com/ru-ru/library/ff679975(v=vs.94).aspx
  const resultNum = Number(result);
  if (max - min <= 1) {
    return resultNum;
  }
  return balance(resultNum);
};

export const balanceGame = () => {
  const num = getRandNum(1000) + 1;
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForBalance, balanceGame));
