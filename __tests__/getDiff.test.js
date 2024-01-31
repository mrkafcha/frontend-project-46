import getDiff from '../src/index.js';

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('stylish compare two JSON files and generate diff', () => {
  expect(getDiff('file1.json', 'file2.json')).toEqual(expected);
});
