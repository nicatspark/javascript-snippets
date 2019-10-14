/**
 * 20. dayOfYear
 * This snippet gets the day of the year from a Date object.
 */
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272

/**
 * 43. Get Time From Date
 * This snippet can be used to get the time from a Date object as a string.
 */
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"

/**
 * 44. Get Days Between Dates
 * This snippet can be used to find the difference in days between two dates.
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

/**
 * 59. isAfterDate
 * This snippet can be used to check whether a date is after another date.
 */
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true

/**
 * 62. isBeforeDate
 * This snippet can be used to check whether a date is before another date.
 */
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
