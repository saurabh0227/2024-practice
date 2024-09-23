const stringAnagramCheck = (str1, str2) => {
  // let count = 0;

  // for (let i = 0; i < str1.length; i++) {
  //   if (str2.includes(str1[i])) count++;
  // }

  // return count === str2.length;

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
};
console.log('stringAnagramCheck:', stringAnagramCheck('listen', 'silent'));
