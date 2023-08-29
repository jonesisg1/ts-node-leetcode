export function isValid(s: string): boolean {
  let chr: string;
  const parMap:Map<string,string> = new Map();

  parMap.set("(",")");
  parMap.set("{","}");
  parMap.set("[","]");

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