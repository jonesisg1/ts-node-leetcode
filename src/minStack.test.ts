import { MinStack } from "./minStack";

const stack = new MinStack();

test('One', () => {
  stack.push(6);
  expect(stack.top()).toBe(6);
  expect(stack.getMin()).toBe(6);
});

test('Two', () => {
  stack.push(7);
  expect(stack.top()).toBe(7);
  expect(stack.getMin()).toBe(6);
});

test('Three', () => {
  stack.push(3);
  expect(stack.top()).toBe(3);
  expect(stack.getMin()).toBe(3);
});

test('Four', () => {
  stack.pop();
  expect(stack.top()).toBe(7);
  expect(stack.getMin()).toBe(6);
});

test('Five', () => {
  stack.push(-2);
  expect(stack.top()).toBe(-2);
  expect(stack.getMin()).toBe(-2);
});