import readlineSync from 'readline-sync';

export const askPlayerName = () => {
  const playerName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!`);
};
