import { topKFrequent } from "./topKfrequent";

test("topK 1", () => {
  expect(topKFrequent([1,1,2], 1)).toStrictEqual([1]);
});
test("topK 2", () => {
  expect(topKFrequent([1,1,2,2,2,2], 1)).toStrictEqual([2]);
});
test("topK 3", () => {
  expect(topKFrequent([1,1,2,2,2,3], 2)).toStrictEqual([2,1]);
});
test("topK 4", () => {
  expect(topKFrequent([3,0,1,0], 1)).toStrictEqual([0]);
});
