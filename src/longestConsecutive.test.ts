import { longestConsecutive, countSeq } from "./longestConsecutive";

// test('One', () => {
//   expect(longestConsecutive([100,4,200,1,3,2])).toBe(true);
// });

test('One', () => {
  expect(countSeq(new Set([100,4,200,1,3,2]),1)).toBe(4);
});

test('Two', () => {
  expect(countSeq(new Set([100,4,200,1,3,2]),100)).toBe(1);
});

test('Example 1', () => {
  expect(longestConsecutive([100,4,200,1,3,2])).toBe(4);
});

test('Example 2', () => {
  expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9);
});
