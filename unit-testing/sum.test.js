// import sum from "./sum"; // we are allow to write this syntax because of 'Babel'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import { calculateSum } from "./sum";

/* 
  Testing is made up of 3 main stages
  Arrange, Act, Assert
*/
// **NOTE ( describe() is a block or group of tests )

test("Function should return 5", () => {
  // 1. Arrange (set my test)
  let result;
  const outcome = 5;
  // 2. Act (do something)
  result = calculateSum(2, 3);
  // 3. Assert (do something that will end up being truth)
  expect(result).toBe(outcome);
})

// Challenge 1:
// Test this function with more valid inputs e.g. 20 +80, 46 + - 92 etc

test("Function should return 100", () => {
  // 1. Arrange (set my test)
  let result;
  const outcome = 100;
  // 2. Act (calling the function)
  result = calculateSum(20, 80);
  // 3. Assert (result should in some way match the outcome)
  // toBe()
  expect(result).toBe(outcome);
})

test("Function should return -46", () => {
  // 1. Arrange (set my test)
  let result;
  const outcome = -46;
  // 2. Act (do something)
  result = calculateSum(46, -92);
  // 3. Assert (do something that will end up being truth)
  expect(result).toBe(outcome);
})

test("Function should return -200", () => {
  // 1. Arrange (set my test)
  let result;
  const outcome = -200;
  // 2. Act (do something)
  result = calculateSum(-50, -150);
  // 3. Assert (do something that will end up being truth)
  expect(result).toBe(outcome);
})

// Challenge 2:
// Try testing for bad inputs, what happens when you give it null/undefined/etc.