const obj = {
  name: 'Saurabh',
  age: 27,
  'key-three': true,
  sayMayName: function () {
    console.log(this.name);
  }
};

obj.hobby = 'football';

delete obj.hobby;

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
obj.sayMayName();

// Object.keys(), Object.values(), Object.entries()
