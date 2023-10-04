import { dailyTemperatures } from "./dailyTemperatures";

test('One', () => {
  expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toStrictEqual([1,1,4,2,1,1,0,0]);
});

test('Two', () => {
  expect(dailyTemperatures([30,40,50,60])).toStrictEqual([1,1,1,0]);
});

test('Three', () => {
  expect(dailyTemperatures([30,60,90])).toStrictEqual([1,1,0]);
});

test('four', () => {
  expect(dailyTemperatures([89,62,70,58,47,47,46,76,100,70])).toStrictEqual([8,1,5,4,3,2,1,1,0,0]);
});