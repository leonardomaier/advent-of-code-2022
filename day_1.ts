type Elf = {
  carriedItems: number[]
};

const elves: Elf[] = [
  {
    carriedItems: [
      1000, 2000, 3000
    ]
  },
  {
    carriedItems: [
      4000
    ]
  },
  {
    carriedItems: [
      5000, 6000
    ]
  },
  {
    carriedItems: [
      7000, 8000, 9000
    ]
  },
  {
    carriedItems: [
      10000
    ]
  }
];

function findElfCarryingMostCalories(elves: Elf[]): Elf {

  let mostCaloriesElf: { index: number; calories: number } = { 
    index: 0, 
    calories: 0 
  };

  for (let i = 0; i < elves.length; i++) {
    
    const elf = elves[i];

    const calories = elf.carriedItems.reduce((acc, value) => acc + value)

    if (calories > mostCaloriesElf.calories) {
      mostCaloriesElf = { index: i, calories }
    }
  }

  return elves[mostCaloriesElf.index];
}

const foundElf = findElfCarryingMostCalories(elves);

console.log(foundElf);