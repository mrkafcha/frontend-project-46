### Hexlet tests and linter status:
[![Actions Status](https://github.com/mrkafcha/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mrkafcha/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/952aa8c3bfeb8187f4aa/maintainability)](https://codeclimate.com/github/mrkafcha/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/952aa8c3bfeb8187f4aa/test_coverage)](https://codeclimate.com/github/mrkafcha/frontend-project-46/test_coverage)

# Description

Difference Calculator is a program that determines the difference between two data structures.

# Installation:

```
 $ make install

 $ npm link
```
System requirements :

```
 Node.js 21

 npm 10
```

# Usage example :

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```


## stylish comparison :
```
gendiff -f stylish __fixtures__/file1.json __fixtures__/file2.json
```
or
```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/wlLGcPJRLKfrjp4VDmpCLOVPq.svg)](https://asciinema.org/a/wlLGcPJRLKfrjp4VDmpCLOVPq)

## plain comparison :
```
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/CvwzFFp3aA25ZOFx2vmilnvYH.svg)](https://asciinema.org/a/CvwzFFp3aA25ZOFx2vmilnvYH)

## json comparison :
```
gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
```
[![asciicast](https://asciinema.org/a/POS2bRwATWJnkpwsErPl8teXb.svg)](https://asciinema.org/a/POS2bRwATWJnkpwsErPl8teXb)