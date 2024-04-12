import genDiff from '../src/index.js';
import recursive from '../__fixtures__/recursiveCompare.js';

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('compare two JSON files', () => {
  expect(genDiff('__fixtures__/filepath1.json', '__fixtures__/filepath2.json')).toEqual(expected);
});
test('compare two yml files', () => {
  expect(genDiff('__fixtures__/filepath1.yml', '__fixtures__/filepath2.yml')).toEqual(expected);
});
test('compare yml and JSONE files', () => {
  expect(genDiff('__fixtures__/filepath1.yml', '__fixtures__/filepath2.json')).toEqual(expected);
});

test('compare recirsive two JSON files', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(recursive);
});
