export function evalRPN(tokens: string[]): number {
  const stack: Array<number> = [];
  let numA: number;
  let numB: number;
  let ans: number;

  for(const chr of tokens) {
    // is number or operator
    if(Number.isNaN(Number(chr))) {
      numA = Number(stack.pop());
      numB = Number(stack.pop());
      switch (chr) {
        case '/':
          ans = Math.trunc(numB / numA);
          break;
        case '*':
          ans = numB * numA;
          break;
        case '-':
          ans = numB - numA;
          break;
        case '+':
          ans = numB + numA;
          break;
        default:
          ans = 0;
      }
      console.log(`${numB} ${chr} ${numA} = ${ans}`)
      stack.push(ans);
    } else {
      stack.push(Number(chr));
    }
    // console.log(stack);
  }
  console.log('----End----');
  return stack[0];
}