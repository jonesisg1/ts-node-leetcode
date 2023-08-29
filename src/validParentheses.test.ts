import { isValid } from "./validParentheses";

test('One', () => {
  expect(isValid("()")).toBe(true);
});

test('Two', () => {
  expect(isValid("()[]{}")).toBe(true);
});

test('Three', () => {
  expect(isValid("(]")).toBe(false);
});

test('Four', () => {
  expect(isValid("((){[][]})")).toBe(true);
});

test('Five', () => {
  expect(isValid("[([{}])")).toBe(false);
});

test('Six', () => {
  expect(isValid("[](({})){}")).toBe(true);
});

