/*
1. all
This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. You can omit the second argument fn if you want to use Boolean as a default value.
*/
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true

/*
3. approximatelyEqual
This snippet checks whether two numbers are approximately equal to each other, with a small difference.
*/
const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true

/**
 * const castArray = val => (Array.isArray(val) ? val : [val]);
 *
 * castArray('foo'); // ['foo']
 * castArray([1]); // [1]
 */
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]

/**
 * 16. compact
 * This snippet removes false values from an array.} arr
 */
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

/**
 * 17. countOccurrences
 * This snippet counts the occurrences of a value in an array.
 */
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

/**
 * 22. deepFlatten
 * This snippet flattens an array recursively.
 */
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

/**
 * 26. difference
 * This snippet finds the difference between two arrays.
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]

/**
 * 28. differenceWith
 * This snippet removes the values for which the comparator function returns false.
 */
const differenceWith = (arr, val, comp) =>
  arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0],
  (a, b) => Math.round(a) === Math.round(b)
);
// [1, 1.2]

/**
 * 31. Drop Elements
 * This snippet returns a new array with n elements removed from the left.
 */
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []

/**
 * 32. dropRight
 * This snippet returns a new array with n elements removed from the right.
 */
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

/**
 * 33. dropRightWhile
 * This snippet removes elements from the right side of an array until the passed function returns true.
 */
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

/**
 * 34. dropWhile
 * This snippet removes elements from an array until the passed function returns true.
 */
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

/**
 * 38. findLast
 * This snippet returns the last element for which a given function returns a truthy value.
 */
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

/**
 * 39. flatten
 * This snippet flattens an array up to a specified depth using recursion.
 */
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

/**
 * 40. forEachRight
 * This snippet executes a function for each element of an array starting from the array’s last element.
 */
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

/**
 * 51. indexOfAll
 * This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it.
 */
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []

/**
 * 52. initial
 * This snippet returns all elements of an array except the last one.
 */
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]

/**
 * 55. intersection
 * This snippet can be used to get an array with elements that are included in two other arrays.
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

/**
 * 56. intersectionBy
 * This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.
 */
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]

/**
 * 57. intersectionWith
 * This snippet can be used to return a list of elements that exist in both arrays by using a comparator function.
 */
const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]

/**
 * 60. isAnagram
 * This snippet can be used to check whether a particular string is an anagram with another string.
 */
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true

/**
 * 61. isArrayLike
 * This snippet can be used to check if a provided argument is iterable like an array.
 */
const isArrayLike = obj =>
  obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
