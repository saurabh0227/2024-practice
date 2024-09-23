const zipZagSequence = (input) => {
  const arr = new Array(input).fill(0).map((_, i) => i + 1);
  const mid = Math.floor(arr.length / 2);
  const rightArr = arr.slice(mid, arr.length).sort((a, b) => b - a);
  const leftArr = arr.slice(0, mid);

  const final = [...leftArr, ...rightArr];

  return final;
};

console.log(zipZagSequence(7));
