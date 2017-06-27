import readlineSync from 'readline-sync';

export const welcomeLine = () => console.log('Welcome to the Brain Games!');

export const askPlayerName = () => {
  const playerName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const steps = 3;
const setRandNum = max => Math.floor(max * Math.random());
const isEven = num => num % 2 === 0;

export const ruleForEven = () => console.log('Answer "yes" if number even otherwise answer "no".');

export const questionEven = () => {
  const playerName = askPlayerName();
  for (let i = 1; i <= steps; i += 1) {
    const question = setRandNum(100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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

// export questionEven;
