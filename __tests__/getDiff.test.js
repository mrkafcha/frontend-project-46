import url from 'url';
import path from 'path';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('stylish comparison two json files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultStylish.txt');
  expect(genDiff(file1, file2)).toEqual(expected);
});

test('stylish comparison two yml files', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const expected = readFile('resultStylish.txt');
  expect(genDiff(file1, file2)).toEqual(expected);
});

test('stylish comparison yaml and json files', () => {
  const file1 = getFixturePath('filepath1.yaml');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultStylish.txt');
  expect(genDiff(file1, file2)).toEqual(expected);
});

test('plain comparison two json files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultPlain.txt');
  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('plain comparison two yml files', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const expected = readFile('resultPlain.txt');
  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('json comparison two json files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultJson.txt');
  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});

test('json comparison two yml files', () => {
  const file1 = getFixturePath('filepath1.yml');
  const file2 = getFixturePath('filepath2.yml');
  const expected = readFile('resultJson.txt');
  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});