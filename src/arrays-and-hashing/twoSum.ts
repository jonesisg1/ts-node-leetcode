import { Application, Request, Response } from "express";

export function postTwoSum(app: Application) {
  app.post("/twoSum", (req: Request, res: Response) => {
    const status = {
      "answer": twoSum(req.body.nums, req.body.target)
    };
    res.send(status);
  })
}

export function twoSum1(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (let o = 0; o < nums.length; o++) {
    for (let i = o+1; i < nums.length; i++) {
      // console.log(nums[o] + " " + nums[i] + " " + (nums[o] + nums[i]))
      if (nums[o] + nums[i] === target) {
        result = new Array<number>(o, i)
        break;
      }
    }
  }
  return result;
}

export function twoSum(nums: number[], target: number): number[] {
  const arrLen: number = nums.length;
  for (let o = 0; o < arrLen; o++) {
    for (let i = o+1; i < arrLen; i++) {
      // console.log(nums[o] + " " + nums[i] + " " + (nums[o] + nums[i]))
      if (nums[o] + nums[i] === target) {
        return new Array<number>(o, i);
      }
    }
  }
  return new Array<number>(-1, -1);
}