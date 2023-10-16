export function twoSum2(numbers: number[], target: number): number[] {

  const numMap = new Map<number,number>();

  for(let i = 0; i < numbers.length; i++) {
    if (numMap.has(numbers[i])) {
      console.log([numMap.get(numbers[i]) || 0, i + 1]);
      return [numMap.get(numbers[i]) || 0, i + 1];
    } else {
      numMap.set(target - numbers[i], (i + 1));
    }
  }
  return [0,0];
}