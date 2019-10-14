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

/**
 * 65. isBrowserTabFocused
 * This snippet can be used to determine whether the browser tab is focused.
 */
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true

/**
 * 87. nodeListToArray
 * This snippet can be used to convert a nodeList to an array.
 */
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

/**
 * 101. scrollToTop
 * This snippet can be used to do a smooth scroll to the top of the current page.
 */

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();

/**
 * 102. serializeCookie
 * This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string.
 */
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'

/**
 * 103. setStyle
 * This snippet can be used to set the value of a CSS rule for a particular element.
 */
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px

/**
 * 105. show
 * This snippet can be used to show all the elements specified.
 */
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page

/**
 * 109. smoothScroll
 * This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
 */
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
