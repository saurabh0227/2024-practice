const fruits = new Map();

fruits.set('apples', 500);
fruits.set('bananas', 400);
fruits.set('oranges', 300);

// console.log('fruits1', fruits);

fruits.set('pineapples', 700);

// console.log('fruits2', fruits);

const students = new Map([
  ['saurabh', 28],
  ['monika', 25],
  ['kohli', 33]
]);

// console.log('students', students);

// console.log('---', fruits.has('guavas'));

for (let [key, value] of fruits) {
  console.log(key, value);
}
