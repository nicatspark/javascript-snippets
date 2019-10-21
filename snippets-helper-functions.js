/*
6. attempt
This snippet executes a function, returning either the result or the caught error object.
*/
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []

/**
 * 7. average
 * This snippet returns the average of two or more numerical values.
 */
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2

/**
 * 24. defer
 * This snippet delays the execution of a function until the current call stack is cleared.
 */
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

/**
 * 42. functionName
 * This snippet prints the name of a function into the console.
 */
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)

/**
 * 46. getType
 * This snippet can be used to get the type of a value.
 */
const getType = v =>
  v === undefined
    ? 'undefined'
    : v === null
    ? 'null'
    : v.constructor.name.toLowerCase();

getType(new Set([1, 2, 3])); // 'set'

/**
 * 58. is
 * This snippet can be used to check if a value is of a particular type.
 */
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true

/**
 * 69. isNumber
 * This snippet can be used to check whether a provided value is a number.
 */

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

isNumber('1'); // false
isNumber(1); // true

/**
 * 73. isPromiseLike
 * This snippet checks whether an object looks like a Promise.
 */

const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false

/**
 * 79. isValidJSON
 * This snippet can be used to check whether a string is a valid JSON.
 */
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true

/**
 * 85. minN
 * This snippet returns the n smallest elements from a list. If n is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).
 */
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]

/**
 * 90. Random Hexadecimal Color Code
 * This snippet can be used to generate a random hexadecimal color code.
 */
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"

/**
 * 98. runPromisesInSeries
 * This snippet can be used to run an array of promises in series.
 */
const runPromisesInSeries = ps =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]);
// Executes each promise sequentially, taking a total of 3 seconds to complete

/**
 * 108. sleep
 * This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}

/**
 * 117. timeTaken
 * This snippet can be used to find out the time it takes to execute a function.
 */
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms

/**
 * 118. times
 * This snippet can be used to iterate over a callback n times.
 */
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234

/**
 * 119. toCurrency
 * This snippet can be used to format a number like a currency.
 */
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr
  }).format(n);

toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish

/**
 * 120. toDecimalMark
 * This snippet uses the toLocaleString() function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string.
 */
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"

/**
 * 126. validateNumber
 * This snippet can be used to check whether a value is a number.
 */
const validateNumber = n =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true

/**
 * The Publisher/Subscriber Pattern in JavaScript
 * From https://medium.com/better-programming/the-publisher-subscriber-pattern-in-javascript-2b31b7ea075a
 */

function pubSub() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach(callback => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }

    subscribers[eventName].push(callback);

    const index = subscribers[eventName].length - 1;

    return {
      unsubscribe() {
        subscribers[eventName].splice(index, 1);
      }
    };
  }

  return {
    publish,
    subscribe
  };
}
// ===========
function showMeTheMoney(money) {
  console.log(money);
}
pubSub().subscribe('show-money', showMeTheMoney);
// Later...
pubSub().publish('show-money', 1000000);
//============
const unsubscribeFood = subscribe('food', function(data) {
  console.log(`Received some food: ${data}`);
});
// Removes the subscribed callback
unsubscribeFood();

/**
 * Cancellable fetch
 * https://developers.google.com/web/updates/2017/09/abortable-fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
 */

export function cancelableFetch(reqInfo, reqInit) {
  var abortController = new AbortController();
  var signal = abortController.signal;
  var cancel = abortController.abort.bind(abortController);

  var wrapResult = function (result) {
    if (result instanceof Promise) {
      var promise = result;
      promise.then = function (onfulfilled, onrejected) {
        var nativeThenResult = Object.getPrototypeOf(this).then.call(this, onfulfilled, onrejected);
        return wrapResult(nativeThenResult);
      }
      promise.cancel = cancel;
    }
    return result;
  }

  var req = window.fetch(reqInfo, Object.assign({signal: signal}, reqInit));
  return wrapResult(req);
}
// ===========
var req = cancelableFetch("/api/config")
  .then(res => res.json())
  .catch(err => {
    if (err.code === DOMException.ABORT_ERR) {
      console.log('Request canceled.')
    }
    else {
      // handle error
    }
  });

setTimeout(() => req.cancel(), 2000);