import { numberToWords } from "./numberToWords";

test('One', () => {
  expect(numberToWords(1)).toBe('One');
});

test('Two', () => {
  expect(numberToWords(12)).toBe('Twelve');
});

test('Three', () => {
  expect(numberToWords(20)).toBe('Twenty');
});

test('Four', () => {
  expect(numberToWords(27)).toBe('Twenty Seven');
});

test('Five', () => {
  expect(numberToWords(100)).toBe('One Hundred');
});

test('Six', () => {
  expect(numberToWords(127)).toBe('One Hundred Twenty Seven');
});

test('Seven', () => {
  expect(numberToWords(1000)).toBe('One Thousand');
});

test('Eight', () => {
  expect(numberToWords(1001)).toBe('One Thousand One');
});

test('Nine', () => {
  expect(numberToWords(1100)).toBe('One Thousand One Hundred');
});

test('Example 2', () => {
  expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
});

test('Ten', () => {
  expect(numberToWords(7483648)).toBe('Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Eight');
});

test('Test 583', () => {
  expect(numberToWords(1234567891)).toBe('One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');
});
