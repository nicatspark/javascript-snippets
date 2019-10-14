/**
 * 25. degreesToRads
 * This code snippet can be used to convert a value from degrees to radians.
 */
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708

/**
 * 30. distance
 * This snippet returns the distance between two points by calculating the Euclidean distance.
 */
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
