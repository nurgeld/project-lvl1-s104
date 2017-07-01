import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForBalance = 'Balance the given number.';

const balance = (number) => {
  // const strNum = String(number);
  let result = '';
  const iter = (num, acc) => {
    const strNum = String(num);
    if (acc === strNum.length - 1) {
      return result;
    }
    if (Number(strNum[acc]) - Number(strNum[acc + 1]) > 1) {
      result += Number(strNum[acc]) - 1;
      result += Number(strNum[acc + 1]) + 1;
      result += strNum.substring(acc + 2, strNum.length);
    }
    if (Number(strNum[acc]) - Number(strNum[acc + 1]) < -1) {
      result += Number(strNum[acc]) + 1;
      result += Number(strNum[acc + 1]) - 1;
      result += strNum.substring(acc + 2, strNum.length);
    }
    result += strNum;
    return iter(result, acc + 1);
  };
  return iter(number, 0);
};

export const balanceGame = () => {
  const num = getRandNum(1000) + 1;
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForBalance, balanceGame));
