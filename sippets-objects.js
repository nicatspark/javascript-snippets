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

/**
 * 70. isObject
 * This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value.
 * If it is already an object, then an object type that corresponds to the given value will be returned. Otherwise, a new object will be returned.
 */
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false

/**
 * 71. isObjectLike
 * This snippet can be used to check if a value is not null and that its typeof is “object”.
 */
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false

/**
 * 72. isPlainObject
 * This snippet checks whether a value is an object created by the Object constructor.
 */
const isPlainObject = val =>
  !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false

/**
 * 81. matches
 * This snippet compares two objects to determine if the first one contains the same property values as the second one.
 */
const matches = (obj, source) =>
  Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false

/**
 * 104. shallowClone
 * This snippet can be used to create a shallow clone of an object.
 */
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
