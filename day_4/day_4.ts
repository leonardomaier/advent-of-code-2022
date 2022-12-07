import { readFileSync } from 'fs';

const inputFile = readFileSync('day_4_input.txt', 'utf-8');

const input = inputFile.split('\n');

let total = 0;

for (let i = 0; i < input.length; i++) {
  const currentPair = input[i];
  
  const [firstElf, secondElf] = currentPair.split(',');

  if (overlap(firstElf, secondElf)) {
    total += 1;
  }
}

function fullyContains(firstElf: string, secondElf: string): boolean {

  const [firstElfLeft, firstElfRight] = firstElf.split('-').map(v => +v);
  const [secondElfLeft, secondElfRight] = secondElf.split('-').map(v => +v);

  if (firstElfLeft <= secondElfLeft && firstElfRight >= secondElfRight) {
    return true
  } else if (firstElfLeft >= secondElfLeft && firstElfRight <= secondElfRight) { 
    return true
  }

  return false;
}

function overlap(firstElf: string, secondElf: string): boolean {
  
  const [firstElfLeft, firstElfRight] = firstElf.split('-').map(v => +v);
  const [secondElfLeft, secondElfRight] = secondElf.split('-').map(v => +v);

  if (
    (secondElfLeft >= firstElfLeft && secondElfLeft <= firstElfRight) ||
    (secondElfRight >= firstElfLeft && secondElfRight <= firstElfRight) ||
    (firstElfLeft >= secondElfLeft && firstElfLeft <= secondElfRight) ||
    (firstElfRight >= secondElfLeft && firstElfRight <= secondElfRight)
  ) {
    return true;
  }
  
  return false;
}

console.log(total);