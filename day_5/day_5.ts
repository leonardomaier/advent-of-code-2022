import { readFileSync } from 'fs';

const inputFile = readFileSync('day_5_input.txt', 'utf-8');

const input = inputFile.split('\n');

const movements = input.map(move => move.match(/\d+/g)?.map(v => +v));

const stacks: string[][] = [
  ['F', 'D', 'B', 'Z','T','J','R','N'],
  ['R','S','N','J','H'],
  ['C','R','N','J','G','Z','F','Q'],
  ['F','V','N','G','R','T','Q'],
  ['L','T','Q','F'],
  ['Q','C','W','Z','B','R','G','N'],
  ['F','C','L','S','N','H','M'],
  ['D','N','Q','M','T','J'],
  ['P','G','S']
];

function removeCrates(stackIndex: number, numberOfCrates: number): string[] {

  const removedCrates: string[] = [];

  for (let i = 0; i < numberOfCrates; i++) {

    const currentCrate = stacks[stackIndex - 1].pop();

    if (!currentCrate) continue;

    removedCrates.push(currentCrate);
  }

  return removedCrates.reverse();
}

function addCrates(stackIndex: number, crates: string[]): void {
  for (let i = 0; i < crates.length; i++) {
    stacks[stackIndex - 1].push(crates[i]);
  }
}

for (let movement of movements) {

  if (!movement) continue;

  const [numberOfCrates, from, to] = movement;

  const cratesToRearrange = removeCrates(from, numberOfCrates);

  addCrates(to, cratesToRearrange);
}

const answer = [];

for (let i = 0; i < stacks.length; i++) {
  const currentStack = stacks[i];
  answer.push(currentStack.pop());
}

console.log(answer.join(''));