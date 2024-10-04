const obj = {
  a: 1,
  b: function () {
    return this.a;
  },
  c: () => {
    return this.a;
  }
};

console.log(obj.b()); // Output 1?
console.log(obj.c()); // Output 2?

const test = obj.b;
console.log(test()); // Output 3?

const testArrow = obj.c;
console.log(testArrow()); // Output 4?
