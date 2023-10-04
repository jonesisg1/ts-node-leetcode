import { Application, Request, Response } from "express";

export function postContainsDuplicate(app: Application) {
  app.post("/containsDuplicate", (req: Request, res: Response) => {
    const status = {
      "answer": containsDuplicateMap(req.body.input)
    };
    res.send(status);
  })
}

export function containsDuplicate(nums: number[]): boolean {
  const have: number[] = [];
  let found: boolean = false
  for (const num of nums) {
    console.log(num);
    console.log(have);
    if ((have.find((el) => el === num) !== undefined)) {
      found = true;
      break;
    } else {
       have.push(num);
    }
  }
  return found;
}

export function containsDuplicateMap(nums: number[]): boolean {
  const numberMap = new Map();
  let found: boolean = false
  for (const num of nums) {
    console.log(num);
    if (numberMap.has(num)) {
      found = true;
      break;
    } else {
       numberMap.set(num, 1);
    }
  }
  return found;
}
