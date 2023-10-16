import { twoSum2 } from './twoSum2'

test('One', () => {
  expect(twoSum2([2,7,11,15],9)).toStrictEqual([1,2]);
});

test('two', () => {
  expect(twoSum2([2,3,4],6)).toStrictEqual([1,3]);
});

test('three', () => {
  expect(twoSum2([-1,0],-1)).toStrictEqual([1,2]);
});