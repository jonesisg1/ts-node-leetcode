import { isAnagram, isAnagramMap } from "./anagram";

  test('newark is wanker', () => {
    expect(isAnagram('newark', 'wanker')).toBe(true);
  });

  test('newark is not wanser', () => {
    expect(isAnagram('newark', 'wanser')).toBe(false);
  });

  test('newark is wanker', () => {
    expect(isAnagramMap('newark', 'wanker')).toBe(true);
  });

  test('newark is not wanser', () => {
    expect(isAnagramMap('newark', 'wanser')).toBe(false);
  });