const p1 = new Promise((resolve, reject) => {
  const num = 10;
  if (num > 5) {
    resolve('Your number is greater than 5');
  } else reject('Error');
});

const p2 = new Promise((resolve, reject) => {
  const num = 8;
  if (num < 10) {
    resolve('Your number is less than 10');
  } else reject('Error');
});

const p3 = new Promise((resolve, reject) => {
  const num = 10;
  if (num === 10) {
    resolve('Your number is equal to 10');
  } else reject('Error');
});

/**
Promise.all(iterable)

1: Takes an iterable (usually an array) of promises and returns a single Promise.
2: Resolves when all of the promises in the iterable have resolved.
3: Rejects immediately if any of the promises reject.
 */

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log('Promise.all', results);
  })
  .catch((error) => {
    console.log('Promise.all', error);
  });

/**
Promise.race(iterable)

1: Takes an iterable of promises and returns a single Promise
2: Resolves or rejects as soon as any of the promises in the iterable resolve or reject, with the value or reason from that promise.
 */

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log('Promise.race', result);
  })
  .catch((error) => {
    console.log('Promise.race', error);
  });

/**
Promise.allSettled(iterable)

1: Takes an iterable of promises and returns a promise that resolves after all of the given promises have either resolved or rejected.
2: The result is an array of objects, each representing the outcome of each promise (fulfilled or rejected).
 */

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    results.forEach((result) => console.log('Promise.allSettled', result));
  })
  .catch((error) => {
    console.log('Promise.allSettled', error);
  });

/**
Promise.any(iterable)

1: Takes an iterable of promises and returns a single Promise.
2: Resolves as soon as any of the promises resolve.
3: If all promises reject, it rejects with an AggregateError (a special error object).
 */

Promise.any([p1, p2, p3])
  .then((results) => {
    console.log('Promise.any', results);
  })
  .catch((error) => {
    console.log('Promise.any', error);
  });
