export function countSeq(numSet: Set<number>, start: number): number {
  let count: number = 0;
  let next: number = start + 1;
  let found: boolean = true;
  while (found) {
    count++;
    found = numSet.has(next);
    next++;
  }
  // console.log(`Start ${start} - Count ${count}`)
  return count;
}

export function longestConsecutive(nums: number[]): number {
  
  const numSet = new Set(nums);

  let best: number = 0;

  let currentCount:number;
  for(const num of nums) {
    if (numSet.has(num - 1) === false) {
      currentCount = countSeq(numSet, num);
      best = (currentCount > best) ? currentCount : best;
      // console.log(`Best ${best}`);
    }
  }

  return best;
}