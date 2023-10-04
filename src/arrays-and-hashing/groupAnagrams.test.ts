import { groupAnagrams, compare2DString } from "./groupAnagrams";

test("compare2DString 1", () => {
  expect(compare2DString([["foo"],["bar"],["baz"]], [["foo"],["bar"],["baz"]])).toBe(true);
});
test("compare2DString 2", () => {
  expect(compare2DString([["baz"],["bar"],["foo"]], [["foo"],["bar"],["baz"]])).toBe(true);
});
test("compare2DString 3", () => {
  expect(compare2DString([["bar"],["foo"]], [["foo"],["bar"],["baz"]])).toBe(false);
});
test("compare2DString 4", () => {
  expect(compare2DString([["bar"],["foo"],["ian"]], [["foo"],["bar"],["baz"]])).toBe(false);
});
test("compare2DString 5", () => {
  expect(compare2DString([["baz"],["bar"],["foo","ian"]], [["ian","foo"],["bar"],["baz"]])).toBe(true);
});

test("One cat", () => {
  expect(groupAnagrams(["cat"])).toStrictEqual([["cat"]]);
});
test("cats and dog", () => {
  expect(groupAnagrams(["cat","dog","tac"])).toStrictEqual([["tac","cat"],["dog"]]);
});
test("multi groups", () => {
  expect(compare2DString(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])).toBe(true);
});
test("Empty", () => {
  expect(groupAnagrams([""])).toStrictEqual([[""]]);
});