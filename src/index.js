import * as path from 'path';
import fs from 'node:fs';
import сomparisonFile from './getDiff.js';
import parsers from './parsers.js';
import stylish from './formaters/stylish.js';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');
const format = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {
  const file1 = parsers(readFile(filepath1), format(filepath1));
  const file2 = parsers(readFile(filepath2), format(filepath2));
  const getDiffTree = сomparisonFile(file1, file2);
  const result = stylish(getDiffTree);

  return result;
};

export default genDiff;
