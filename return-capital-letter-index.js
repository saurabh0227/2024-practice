// const returnCapitalLetterIndex = () => {
//   const str = 'SaUraBhKuMAr';
//   const strArr = str.split('');
//   const capitalIndexes = [];
//   for (let i = 0; i < strArr.length; i++) {
//     const uc = strArr[i].toUpperCase();
//     if (strArr[i] === uc) {
//       capitalIndexes.push(i);
//     }
//   }
//   console.log(capitalIndexes);
// };

const returnCapitalLetterIndex = () => {
  const str = 'SaUraBhKuMAr';
  const capitalIndexes = str
    .split('')
    .map((char, index) => (char === char.toUpperCase() ? index : -1))
    .filter((index) => index !== -1);

  console.log(capitalIndexes);
};

returnCapitalLetterIndex();
