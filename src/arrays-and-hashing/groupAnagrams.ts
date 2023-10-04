import { isAnagramMap } from "./anagram";

export function groupAnagrams(strs: string[]): string[][] {
  const numWords: number = strs.length;
  let word: string = strs.pop() || '';
  const firstGroup: string[] = new Array<string>(word);
  const anagramGroups: string[][] = new Array(firstGroup)
  let isFound: boolean = false;
  for (let i = 1; i < numWords; i++) {
    word = strs.pop() || '';
    isFound = false;
    for (let a = 0; a < anagramGroups.length; a++) {
      if (isAnagramMap(word, anagramGroups[a][0])) {
        anagramGroups[a].push(word);
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      anagramGroups.push(new Array<string>(word));
    }
  }
  console.log(anagramGroups)
  return anagramGroups;
}

export function compare2DString(str2D1:string[][], str2D2:string[][]): boolean {
  if (str2D1.length != str2D2.length) {
    return false;
  }
  let strArr1: string[] = [];
  let strArr2: string[] = [];
  for (let i  = 0; i < str2D1.length; i++) {
    strArr1 = strArr1.concat(str2D1[i]);
    strArr2 = strArr2.concat(str2D2[i]);
  }
  // console.log(strArr1 + " - " + strArr2);
  return (strArr1.sort().toString() === strArr2.sort().toString()); 
}