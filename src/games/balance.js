import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForBalance = 'Balance the given number.';

const balance = (number) => {
  const strNum = String(number);
  let result = '';
  for (let i = 0; i < strNum.length - 1; i += 1) {
    // let result = '';
    if (Number(strNum[i]) - Number(strNum[i + 1]) > 1) {
      result += Number(strNum[i]) - 1;
      result += Number(strNum[i + 1]) + 1;
      result += strNum.substring(i + 2, strNum.length);
    }
    if (Number(strNum[i]) - Number(strNum[i + 1]) < -1) {
      result += Number(strNum[i]) + 1;
      result += Number(strNum[i + 1]) - 1;
      result += strNum.substring(i + 2, strNum.length);
    }
    if (Math.abs(Number(strNum[i]) - Number(strNum[i + 1])) <= 1) {
      result += strNum;
    }
  }
  // надо как-то выйти из рекурсии, с результатом, имеющим сбалансированное
  // число (на этом этапе с еще не упорядоченными цифрами)
  return balance(Number(result));
};

export const balanceGame = () => {
  const num = getRandNum(1000) + 1;
  const question = `${num}`;
  const answer = balance(num);
  return cons(question, answer);
};

export default () => gameLogic(cons(ruleForBalance, balanceGame));
