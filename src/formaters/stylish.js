import _ from 'lodash';

const getIndents = (depth) => {
  const indent = '';
  const indentSize = depth * 4;
  return indent.repeat(indentSize - 2);
};

const renderToString = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const idents = getIndents(depth);
  const lines = Object.entries(value)
    .map(([key, val]) => `${idents}  ${key}: ${renderToString(val, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${idents}}`,
  ].join('\n');
};

export default (tree) => {
  const iter = (node, depth) => {
    const result = node.map(({
      key, value, type, newValue,
    }) => {
      const idents = getIndents(depth);
      switch (type) {
        case 'unchanged':
          return `${idents}  ${key}: ${(value)}`;
        case 'changed':
          return `${idents}- ${key}: ${renderToString(value, depth)}${idents}\n+ ${key}: ${renderToString(newValue, depth)}`;
        case 'deleted':
          return `${idents}- ${key}: ${renderToString(value, depth)}`;
        case 'added':
          return `${idents}+ ${key}: ${renderToString(value, depth)}`;
        case 'nested':
          return `${idents}  ${key}: {\n${iter(value, depth + 1)}\n}`;
        default:
          throw new Error('This type is not in use.');
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(tree, 1)}\n}`;
};
