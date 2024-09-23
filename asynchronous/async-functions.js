/**
 1. setTimeout(callback, delay)
    Executes a function after a specified delay (in milliseconds).
 */

// const timeoutId = setTimeout(() => {
//   console.log('setTimeout: Executed after 2 seconds');
// }, 2000);

// Cancels the setTimeout
// clearTimeout(timeoutId);

/**
 2. setInterval(callback, interval)
    Executes a function repeatedly, with a fixed time delay between each call (in milliseconds), until clearInterval is called.
 */

// const intervalId = setInterval(() => {
//   console.log('setInterval: Executed every 1 second');
// }, 1000);

// To stop the interval
// clearInterval(intervalId);

/**
 3. setImmediate(callback) (Node.js only)
    Executes a function after the current event loop finishes. It is similar to setTimeout(callback, 0) but is specific to Node.js.
 */
setImmediate(() => {
  console.log('Executed immediately after the current event loop finishes');
});

/**
 4. process.nextTick(callback) (Node.js only)
    Schedules a callback to be invoked in the next iteration of the event loop, before any I/O tasks, timers, or setImmediate.
*/

process.nextTick(() => {
  console.log('Executed before other asynchronous functions');
});
