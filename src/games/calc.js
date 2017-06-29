import { cons } from 'hexlet-pairs';
import gameLogic, { setRandNum } from '..';

const ruleForCalc = 'What is the result of the expression?';

export const calc = () => {
  const operators = '+-*';
  const firstNum = setRandNum(100);
  const secondNum = setRandNum(100);
  const operator = operators[setRandNum(operators.length)];
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
