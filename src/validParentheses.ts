export function isValid(s: string): boolean {
  if(s.length % 2 !== 0) {
    return false;
  }

  let chr: string;
  const parMap:Map<string,string> = new Map([["(",")"], ["{","}"], ["[","]"]]);
  const openStack: Array<string> = [];
  let lastOpen: string;

  for(let i = 0; i < s.length; i++) {
    chr = s.substring(i, i + 1);
    console.log(chr);
    if('({['.includes(chr)) {
      openStack.push(chr);
    } else {
      lastOpen = openStack.pop() || '';
      if(parMap.get(lastOpen) !== chr) {
        return false;
      }
    }
  }
  return (openStack.length > 0) ? false : true;
}