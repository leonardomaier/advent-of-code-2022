import { readFileSync } from 'fs';

const inputFile = readFileSync('day_2_input.txt', 'utf-8');

enum PlayType {
  Rock,
  Paper,
  Scissors
};

type PlayMap = {
  [key: string]: {
    wins: PlayType,
    lose: PlayType
    score: number
  }
};

const playMap: PlayMap = {
  [PlayType.Rock]: {
    wins: PlayType.Scissors,
    lose: PlayType.Paper,
    score: 1
  },
  [PlayType.Paper]: {
    wins: PlayType.Rock,
    lose: PlayType.Scissors,
    score: 2
  },
  [PlayType.Scissors]: {
    wins: PlayType.Paper,
    lose: PlayType.Rock,
    score: 3
  }
}

const convertMap: { [key: string]: PlayType } = {
  'A': PlayType.Rock,
  'B': PlayType.Paper,
  'C': PlayType.Scissors,
  'X': PlayType.Rock,
  'Y': PlayType.Paper,
  'Z': PlayType.Scissors
}

function convertToEnum(play: Array<string>): Array<PlayType> {
  const [opponentPlay, myPlay] = play;

  return [
    convertMap[opponentPlay],
    convertMap[myPlay]
  ];
}

const plays = inputFile.split('\n');

let totalScore = 0;

for (let i = 0; i < plays.length; i++) {

  const currentPlay = plays[i];

  let [opponentPlayType, myPlayType] = convertToEnum(currentPlay.split(' '));

  const opponentPlay = playMap[opponentPlayType];

  if (myPlayType === PlayType.Rock) {
    myPlayType = opponentPlay.wins;
  } else if (myPlayType === PlayType.Paper) {
    myPlayType = opponentPlayType;
  } else if (myPlayType === PlayType.Scissors) {
    myPlayType = opponentPlay.lose;
  }

  const myPlay = playMap[myPlayType];

  totalScore += myPlay.score;

  if (opponentPlayType === myPlayType) {
    totalScore += 3
  }

  if (myPlay.wins === opponentPlayType) {
    totalScore += 6
  }
}

console.log(totalScore);