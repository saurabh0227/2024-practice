console.log(abc);
var abc = 5;
console.log(abc);

setTimeout(() => {
  console.log(abc);
  abc = 10;
  console.log(abc);
}, 0);

console.log('---');
console.log(abc);

const hMap = new Map([['a', 'a']]);

if (hMap.has('a')) {
  console.log('true');
}

console.log('hMap', hMap);
