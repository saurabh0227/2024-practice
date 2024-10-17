// const timeConversion = (inputTime) => {
//   const timeData = {
//     13: '01',
//     14: '02',
//     15: '03',
//     16: '04',
//     17: '05',
//     18: '06',
//     19: '07',
//     20: '08',
//     21: '09',
//     22: '10',
//     23: '11'
//   };

//   const inputTimeArr = inputTime.split(':');

//   if (key === inputTimeArr[0]) {
//     return `${timeData[key]}:${inputTimeArr[1]} PM`;
//   } else {
//     return `${inputTime} AM`;
//   }
// };

const timeConversion = (inputTime) => {
  const inputTimeArr = inputTime.split(':');
  if (inputTimeArr[0] == 12) {
    return `${inputTimeArr[0]}:${inputTimeArr[1]}PM`;
  }
  if (inputTimeArr[0] > 11) {
    return `${inputTimeArr[0] - 12}:${inputTimeArr[1]}PM`;
  } else {
    return `${inputTime}AM`;
  }
};

console.log('timeConversion', timeConversion('13:55'));
