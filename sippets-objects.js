/**
 * 23. default
 * This snippet assigns default values for all properties in an object that are undefined.
 */
const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }

/**
 * 37. findKey
 * This snippet returns the first key that satisfies a given function.
 */
const findKey = (obj, fn) =>
  Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'

/**
 * 41. forOwn
 * This snippet iterates on each property of an object and iterates a callback for each one respectively.
 */
const forOwn = (obj, fn) =>
  Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
