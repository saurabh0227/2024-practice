function curry(a) {
  return function curry1(b) {
    return function curry3(c) {
      return a + b + c;
    };
  };
}

// console.log(curry(10)(20)(30));

// function normal(a) {
//   return (this.a = a);
// }

const arrow = (a) => {
  return (this.a = a);
};

// console.log('normal', normal(10));
console.log('arrow', arrow(10));
