import utils from '../src/utils';

// testSum
test('testSum: adds 1 + 2 to equal 3', () => {
  expect(utils.testSum(1, 2)).toBe(3);
});

// testDifference
test('testDifference: subtract 3 - 1 to equal 2', () => {
    expect(utils.testDifference(3, 1)).toBe(2);
});

// returnuser object
test('createUser assignment', () => {
  const data = utils.createUser('Joe', 'Test', 35)
  expect(data).toEqual({fname: 'Joe', lname: 'Test', age: 35});
});