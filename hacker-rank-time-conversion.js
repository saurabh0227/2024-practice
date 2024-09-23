// const timeConversion = (s) => {
//   const AM_MAP = {
//     12: '00',
//     '01': '01',
//     '02': '02',
//     '03': '03',
//     '04': '04',
//     '05': '05',
//     '06': '06',
//     '07': '07',
//     '08': '08',
//     '09': '09',
//     10: '10',
//     11: '11'
//   };

//   const PM_MAP = {
//     12: '12',
//     '01': '13',
//     '02': '14',
//     '03': '15',
//     '04': '16',
//     '05': '17',
//     '06': '18',
//     '07': '19',
//     '08': '20',
//     '09': '21',
//     10: '22',
//     11: '23'
//   };

//   const isAm = s.includes('AM');

//   const strArr = s.split(':');

//   let finalString = '';

//   if (isAm) {
//     strArr[0] = AM_MAP[strArr[0]];
//     finalString = strArr.join(':').replace('AM', '');
//   } else {
//     strArr[0] = PM_MAP[strArr[0]];
//     finalString = strArr.join(':').replace('PM', '');
//   }

//   console.log(finalString);
// };

// timeConversion('07:05:45PM');

const timeConversion = (s) => {
  // Extract the time period (AM/PM)
  const period = s.slice(-2); // "AM" or "PM"

  // Extract the hour, minute, and second parts
  let [hours, minutes, seconds] = s.slice(0, -2).split(':');

  // Convert hours to 24-hour format based on AM/PM
  if (period === 'AM' && hours === '12') {
    hours = '00'; // 12 AM is 00 in 24-hour format
  } else if (period === 'PM' && hours !== '12') {
    hours = String(parseInt(hours, 10) + 12); // Convert PM hours to 24-hour format
  }

  // Combine the parts and return the result
  return `${hours}:${minutes}:${seconds}`;
};

console.log(timeConversion('07:05:45PM')); // Output: "19:05:45"
