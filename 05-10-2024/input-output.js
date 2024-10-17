// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 + i);
// }

// (function () {
//   var a = (b = 5);
// })();

// console.log(b);

/////////////////
// var a = 0;
// var b = 0;

// while (a < 3) {
//   a++;
//   b += a;
//   console.log(b);
// }

////////////
// function fruit() {
//   console.log('fruit', name);
//   console.log('fruit', price);

//   var name = 'apple';
//   let price = 20;
// }

// fruit();

/////////////

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

////////////

// console.log(+true);
// console.log(typeof +true);

//////////

// console.log(!'anil');
// console.log(typeof 'anil');

////////////

// let data = 'size';
// const bird = {
//   size: 'small'
// };

// console.log(bird[data]);
// console.log(bird['size']);
// console.log(bird.size);
// console.log(bird.data);

///////////

// let c = { name: 'peter' };
// let d;

// d = c;
// c.name = 'saurabh';
// console.log(d.name);

///////////

// var x;
// var x = 10;
// console.log(x); // output 10

///////////

// var x;
// let x = 10;
// console.log(x); // output Error

//////////

// let a = 3;
// let b = new Number(3);

// console.log(a == b); // true
// console.log(a === b); // false

//////////

// let name;
// nmae = {};
// console.log(name);

/////////

// function fruit() {
//   console.log('Woof!');
// }
// fruit.name = 'apple';
// console.log(fruit());

//////////

// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

///////////

// function getAge(...args) {
//   console.log(typeof args);
//   console.log(args);
// }

// getAge(21);

/////////////////

// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

//////////////////

// const obj = { 1: 'a', 2: 'b', 3: 'c' };

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));

/////////////////

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

/////////////////
