const {
  divide, rest, multiply, sum,
} = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('divide 10 / 2 = 5 ', () => {
  expect(divide(10, 0)).toBeNull();
});

test('rest 10 - 2 = 8 ', () => {
  expect(rest(10, 2)).toBe(8);
});

test('multiply 10 * 2 = 20 ', () => {
  expect(multiply(10, 2)).toBe(20);
});
