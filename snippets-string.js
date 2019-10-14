/**
 * 12. byteSize
 * This snippet returns the length of a string in bytes.
 */
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11

/**
 * 13. capitalize
 * This snippet capitalizes the first letter of a string.
 */
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

/**
 * 14. capitalizeEveryWord
 * This snippet capitalizes the first letter of every word in a given string.
 */
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'

/**
 * 21. decapitalize
 * This snippet turns the first letter of a string into lowercase.
 */
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
