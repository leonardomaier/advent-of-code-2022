import { readFileSync } from 'fs';

const content = readFileSync('day_6_input.txt', 'utf-8');

const allDifferentChars = (chunk: string): boolean => {

  const alreadySeen: string[] = [];

  for (let ch of chunk.split('')) {

    if (alreadySeen.includes(ch)) {
      return false;
    }

    alreadySeen.push(ch);
  }

  return true;
}


for (let j = 0; j < content.length; j++) {

  const start = j;
  const end = j + 14;

  const chunk = content.slice(start, end)

  const found = allDifferentChars(chunk)

  if (found) {
    console.log(`${chunk} ${end}`);
    break;
  }
}