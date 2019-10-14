/**
 * 11. bottomVisible
 * This snippet checks whether the bottom of a page is visible.
 */
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

bottomVisible(); // true

/**
 * 35. elementContains
 * This snippet checks whether the parent element contains the child.
 */
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

elementContains(
  document.querySelector('head'),
  document.querySelector('title')
); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false

/**
 * 36. Filter Duplicate Elements
 * This snippet removes duplicate values in an array.
 */
const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

/**
 * 45. getStyle
 * This snippet can be used to get the value of a CSS rule for a particular element.
 */
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'

/**
 * 49. hide
 * This snippet can be used to hide all elements specified.
 */
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page

/**
 * 53. insertAfter
 * This snippet can be used to insert an HTML string after the end of a particular element.
 */
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>

/**
 * 54. insertBefore
 * This snippet can be used to insert an HTML string before a particular element.
 */
const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
