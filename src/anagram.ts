import { Application, Request, Response } from "express";

// newark,wanker
export function postAnagram(app: Application) {
  app.post("/anagram", (req: Request, res: Response) => {
    const status = {
      "answer": isAnagramMap(req.body.s, req.body.t)
    };
    res.send(status);
  })
}

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const s2: string[] = [];
  const t2: string[] = [];
  for (let i = 0; i < s.length; i++ ) {
    s2[i] = s.substring(i, i+1);
    t2[i] = t.substring(i, i+1);
  }
  console.log(s2.sort().toString() + ' ' +  t2.sort().toString())
  return s2.sort().toString() === t2.sort().toString();
}

export function isAnagramMap(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = new Map();
  const tMap = new Map();
  let sChar: string;
  let tChar: string;
  for (let i = 0; i < s.length; i++ ) {
    sChar = s.substring(i, i+1);
    tChar = t.substring(i, i+1);
    sMap.set(sChar, (sMap.get(sChar) + 1 || 0));
    tMap.set(tChar, (tMap.get(tChar) + 1 || 0));
  }
  let ans: boolean = true;
  for (let i = 0; i < s.length; i++ ) {
    sChar = s.substring(i, i+1);
    if (sMap.get(sChar) !== tMap.get(sChar)) {
      ans = false;
      break;
    }
  }
  return ans;
}

