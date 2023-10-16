export function twoSum2(numbers: number[], target: number): number[] {
  let lptr: number = 0;
  let rptr: number = numbers.length - 1;
  let result = null;
  while(result !== target) {
    result = numbers[lptr] + numbers[rptr];
    if(result < target) {
      lptr ++;
    }
    if(result > target) {
      rptr --;
    }
  }
  return [lptr + 1, rptr + 1];
}