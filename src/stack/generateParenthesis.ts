export function generateParenthesis(n: number): string[] {
  const ans: Array<string> = [];
  addPar(ans, '(', 1, 0, n);
  console.log(ans);
  return ans;
}

function addPar(ans: Array<string>, str: string, open: number, close: number, target: number): void {
  if(str.length === target * 2 && open === close) {
    ans.push(str);
  } else {
    if(open < target ) {
      addPar(ans, str + "(", open + 1, close, target);
    }
    if(open > close ) {
      addPar(ans, str + ")", open, close + 1, target);
    }
  }
}