import { readFileSync } from 'fs';

const inputFile = readFileSync('day_1_input.txt', 'utf-8');

type Elf = {
  carriedItems: number[]
};

type MostCaloriesElf = {
  index: number; 
  calories: number;
};

type ElfResult = {
  elf: Elf;
  calories: number;
}

function convertInputToElves(inputFile: string): Elf[] {

  const elves: Elf[] = [];

  const loads = inputFile.split("\n\n");

  for (let i = 0; i < loads.length; i++) {
    
    const currentLoad = loads[i];

    const carriedItems = currentLoad.split('\n').map(item => +item);

    elves.push({ carriedItems });
  }
  
  return elves;
}

function findElfCarryingMostCalories(elves: Elf[]): ElfResult {

  let mostCaloriesElf: MostCaloriesElf = { index: 0, calories: 0 };

  for (let i = 0; i < elves.length; i++) {
    
    const elf = elves[i];

    const calories = elf.carriedItems.reduce((acc, value) => acc + value)

    if (calories > mostCaloriesElf.calories) {
      mostCaloriesElf = { index: i, calories }
    }
  }

  const { index, calories } = mostCaloriesElf;

  return { elf: elves[index], calories };
}

function findTopThreeElvesTotal(elves: Elf[]) {
  
  const elvesTotal = [];
  
  for (let i = 0; i < elves.length; i++) {
    
    const elf = elves[i];

    const calories = elf.carriedItems.reduce((acc, value) => acc + value)

    elvesTotal.push(calories);
  }

  return elvesTotal
    .sort()
    .slice(-3)
    .reduce((acc, value) => acc + value);
}

const elves: Elf[] = convertInputToElves(inputFile);

const totalTopThree = findTopThreeElvesTotal(elves);

const foundElf = findElfCarryingMostCalories(elves);

console.log('Top three elves total: ', totalTopThree);
console.log('Elf carrying most calories: ', foundElf.calories);