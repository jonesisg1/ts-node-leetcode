export function productExceptSelf1(nums: number[]): number[] {
  let numCopy: number[];
  const ansArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    numCopy = new Array(...nums);
    numCopy.splice(i,1);
    ansArr.push(numCopy.reduce((accumulator, currentValue) => accumulator * currentValue))
  }
  return ansArr;
}
// [2,3,4]
export function productExceptSelf2(nums: number[]): number[] {
  const numMap = new Map();
  const ansArr: number[] = [];
  let acc: number = 1;
  for (let o = 0; o < nums.length; o++) {
    for (let i = 0; i <= o; i++) {
      if (i !== o) {
        numMap.set(i, numMap.get(i) * nums[o]);
      } else {
        numMap.set(i, acc);
      }
    }
    acc = acc * nums[o]; // 2 6
  }
  console.log(numMap);
  numMap.forEach((value) => {ansArr.push(Object.is(value, -0) ? 0 : value)});
  return ansArr;
}

export function productExceptSelf(nums: number[]): number[] {
  const preMap = new Map();
  const postMap = new Map();
  const ansArr: number[] = [];
  let acc: number = 1;
  function zero(num: number):number {
    return Object.is(num, -0) ? 0 : num;
  }
  for (let i = 0; i < nums.length; i++) {
    preMap.set(i, acc);
    acc = acc * nums[i]; // Not needed for last element.
  }
  acc = nums[nums.length - 1];
  for (let i = nums.length - 1; i > 0; i--) {
    postMap.set(i - 1, acc);
    acc = acc * nums[i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    ansArr.push(zero((postMap.has(i)) ? preMap.get(i) * postMap.get(i) : preMap.get(i)));
  }
  console.log(preMap);
  console.log(postMap);
  console.log(ansArr)
  return ansArr;
}