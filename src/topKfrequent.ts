export function topKFrequent(nums: number[], k: number): number[] {
  const numMap = new Map();
  console.log(nums);
  for (const num of nums) {
    numMap.set(num, (Number(numMap.get(num)) || 0) + 1);
  }
  const arr: number[][] = [...numMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(arr);
  const ans: number[] = [];
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0])
  }
  console.log(ans);
  return ans;
}