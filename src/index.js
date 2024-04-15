import { cwd } from 'node:process';
import { resolve, extname } from 'node:path';
import fs from 'node:fs';
import сomparisonFile from './getTree.js';
import formatter from './formaters/index.js';
import parsers from './parsers.js';

const readFile = (filepath) => fs.readFileSync(resolve(cwd(), filepath), 'utf-8');
const getFormat = (filepath) => extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => { 
  const file1 = parsers(readFile(filepath1), getFormat(filepath1));
  const file2 = parsers(readFile(filepath2), getFormat(filepath2));
  const getDiffTree = сomparisonFile(file1, file2);
  const result = formatter(getDiffTree, format);

  return result;
};

export default genDiff;
