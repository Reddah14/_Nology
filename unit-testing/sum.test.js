import sum from "./sum"; // we are allow to write this syntax because of 'Babel'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});