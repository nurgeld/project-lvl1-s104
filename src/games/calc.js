import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import getRandNum from '../randomizer';

const ruleForCalc = 'What is the result of the expression?';

export const calc = () => {
  const operators = '+-*';
  const firstNum = getRandNum(100);
  const secondNum = getRandNum(100);
  const operator = operators[getRandNum(operators.length)];
  const questionStr = `${firstNum} ${operator} ${secondNum}`;
  switch (operator) {
    case '+': {
      const questionMath = firstNum + secondNum;
      return cons(questionStr, questionMath);
    }
    case '-': {
      const questionMath = firstNum - secondNum;
      return cons(questionStr, questionMath);
    }
    default: {
      const questionMath = firstNum * secondNum;
      return cons(questionStr, questionMath);
    }
  }
};

export default () => gameLogic(cons(ruleForCalc, calc));
