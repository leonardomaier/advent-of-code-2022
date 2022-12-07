import { readFileSync } from 'fs';

const inputFile = readFileSync('day_3_input.txt', 'utf-8');

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alphabet = alphabet.concat(alphabet.map(c => c.toUpperCase()));

const rucksacks = inputFile.split('\n');

function analyzeRucksack(currentRucksack: string): number {

  if (!currentRucksack) return 0;

  let total = 0;

  const middle = (currentRucksack.length / 2);

  const firstCompartment = currentRucksack.slice(0, middle).split('');
  const secondCompartment = currentRucksack.slice(middle, currentRucksack.length).split('');

  for (let j = 0; j < alphabet.length; j++) {
    const currentLetter = alphabet[j];

    if (firstCompartment.includes(currentLetter) && secondCompartment.includes(currentLetter)) {
      total += getPriorityValue(currentLetter)
    }
  }

  return total;
}

function analyzeThreeRucksack([first, second, third]: string[]): number {

  let total = 0;

  for (let j = 0; j < alphabet.length; j++) {
    const currentLetter = alphabet[j];

    if (first.includes(currentLetter) && second.includes(currentLetter) && third.includes(currentLetter)) {
      total += getPriorityValue(currentLetter)
    }
  }

  return total;
}

function getPriorityValue(character: string): number {
  const idx = alphabet.findIndex(a => a === character);
  return idx + 1;
}

let total = 0;

for (let i = 0; i < rucksacks.length; i += 3) {

  const firstRucksack = rucksacks[i];
  const secondRucksack = rucksacks[i + 1];
  const thirdRucksack = rucksacks[i + 2];

  total += analyzeThreeRucksack([firstRucksack, secondRucksack, thirdRucksack])
}

console.log(total);