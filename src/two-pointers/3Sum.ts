export function threeSum(nums: number[]): number[][] {
  const ans: number[][] = [];
  // const set = new Set();
  //   for(let x = 0; x < nums.length - 2; x++) {
  //     for(let y = x + 1; y < nums.length - 1; y++) {
  //       for(let z = y + 1; z < nums.length; z++) {
  //         if(nums[x] + nums[y] + nums[z] === 0) {
  //           const match = [nums[x], nums[y], nums[z]].sort();
  //           if(!set.has(match.join('-'))) {
  //             set.add(match.join('-'));
  //             ans.push(match);
  //           }
  //         }
  //       }
  //     }
  //   }
  const sortedNums = nums.sort((a,b) => (Number(a) > Number(b))? 1: -1);
  console.log(sortedNums);
  let target: number = 0;
  let result: number;

  let lptr: number;
  let rptr: number;
  let lastX: number | null = null;

  for(let x = 0; x < nums.length - 2; x++) {
      
    if(sortedNums[x] !== lastX) {
      lptr = x + 1;
      rptr = nums.length - 1;
      target = 0 - sortedNums[x];
      let lastL = null;
      while(lptr < rptr) {
        // console.log(`lastL=${lastL}, L=${sortedNums[lptr]}, R=${sortedNums[rptr]}, lptr=${lptr}, rptr=${rptr} target=${target}`)
        if(lastL !== sortedNums[lptr]) {
          result = sortedNums[lptr] + sortedNums[rptr];        
          if(result < target) {
            lastL = sortedNums[lptr];
            lptr ++;
          }
          if(result > target) {
            rptr --;
          }
          if(result === target){
            const found = [sortedNums[x], sortedNums[lptr], sortedNums[rptr]];
            ans.push(found);
            lastL = sortedNums[lptr];
            lptr ++ 
            rptr --;
          }
        } else {
          lptr++;
        }
      }
    }
    lastX = sortedNums[x];
  }
  console.log(ans)
  return ans;
};