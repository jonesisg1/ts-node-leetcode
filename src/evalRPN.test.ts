import { evalRPN } from "./evalRPN";

test('One', () => {
  expect(evalRPN(["2","1","+"])).toBe(3);
});

test('Two', () => {
  expect(evalRPN(["2","1","+","3","*"])).toBe(9);
});

test('Three', () => {
  expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
});