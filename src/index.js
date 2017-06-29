import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const setRandNum = max => Math.floor(max * Math.random());

const steps = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const ruleForGame = car(game);
  console.log(ruleForGame);
  console.log('');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('');
  for (let i = 1; i <= steps; i += 1) {
    const puzzle = cdr(game);
    const questionAndAnswer = puzzle();
    const question = car(questionAndAnswer);
    const correctAnswer = `${cdr(questionAndAnswer)}`;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
