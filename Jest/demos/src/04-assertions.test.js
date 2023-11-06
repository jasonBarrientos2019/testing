test('test Objec', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('nullc', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string ', () => {
  expect('Christoph').toMatch('stoph');
});

test('list /  arrays ', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
