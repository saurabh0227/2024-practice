const stringReverse = (str) => {
  // let reversedString = '';

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedString += str[i];
  // }

  // return reversedString;

  return str.split('').reverse().join('');
};
console.log('reversedString:', stringReverse('Interview, Happy'));
