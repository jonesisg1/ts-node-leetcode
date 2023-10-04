import { generateParenthesis } from "./generateParenthesis";

test('One', () => {
  expect(generateParenthesis(1)).toStrictEqual(["()"]);
});


test('Two', () => {
  expect(generateParenthesis(3)).toStrictEqual(["((()))","(()())","(())()","()(())","()()()"]);
});