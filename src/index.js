import * as path from 'path';
import fs from 'node:fs';
import сomparisonFile from './getTree.js';
import dddd from './formaters/index.js';
import parsers from './parsers.js';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parsers(readFile(filepath1), getFormat(filepath1));
  const file2 = parsers(readFile(filepath2), getFormat(filepath2));
  const getDiffTree = сomparisonFile(file1, file2);
  const result = dddd(getDiffTree, format);

  return result;
};

export default genDiff;
