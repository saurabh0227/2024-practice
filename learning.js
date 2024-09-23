//Immediately Invoked Function

(function () {
  console.log('IIFE normal function');
})();

(() => {
  console.log('IIFE Arrow function');
})();

//Higher Order functions
function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log('Hello world');
});

function higherOrder2() {
  return function () {
    return 'Do something';
  };
}
var x = higherOrder2();
console.log(x()); // Returns "Do something"

//Explain call(), apply() and, bind() methods.
/**
 * call():

It’s a predefined method in javascript.
This method invokes a method (function) by specifying the owner object.
 */

function sayHello() {
  return 'Hello ' + this.name;
}

var obj = { name: 'Sandy' };

sayHello.call(obj);

// Returns "Hello Sandy"

var person = {
  age: 23,
  getAge: function () {
    return this.age;
  }
};
var person2 = { age: 54 };
person.getAge.call(person2);
// Returns 54

function saySomething(message) {
  return this.name + ' is ' + message;
}
var person4 = { name: 'John' };
saySomething.call(person4, 'awesome');
// Returns "John is awesome"

/**
 * apply()

The apply method is similar to the call() method. The only difference is that,

call() method takes arguments separately whereas, apply() method takes arguments as an array.
 */

function saySomething(message) {
  return this.name + ' is ' + message;
}
var person4 = { name: 'John' };
saySomething.apply(person4, ['awesome']);

/**
 * bind():

This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
 */

var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      ' , ' +
      'bike details: ' +
      registrationNumber +
      ' , ' +
      brandName
    );
  }
};

var person1 = { name: 'Vivek' };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  'TS0122',
  'Bullet'
);

// Binds the displayDetails function to the person1 object

detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet

/**
 * What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
 */

function add(a) {
  return function (b) {
    return a + b;
  };
}

add(3)(4);

/**
 * Explain Closures in JavaScript.
Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
 */
function randomFunc() {
  var obj1 = { name: 'Vivian', age: 45 };

  return function () {
    console.log(obj1.name + ' is ' + 'awesome'); // Has access to obj1 even when the randomFunc function is executed
  };
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();
