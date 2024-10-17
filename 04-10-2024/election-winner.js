const electionWinner = (arr) => {
  const hMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hMap.has(arr[i])) {
      hMap.set(arr[i], hMap.get(arr[i]) + 1);
    } else {
      hMap.set(arr[i], 1);
    }
  }

  // Find the candidate with the maximum votes
  let maxVotes = 0;
  let winner = '';

  hMap.forEach((votes, candidate) => {
    if (votes > maxVotes || (votes === maxVotes && candidate < winner)) {
      maxVotes = votes;
      winner = candidate;
    }
  });

  return `${winner} ${maxVotes}`;
};

console.log(
  'electionWinner',
  electionWinner([
    'john',
    'johny',
    'jackie',
    'johny',
    'jackie',
    'jamie',
    'jamie',
    'john',
    'johny',
    'jamie',
    'johny',
    'john',
    'john'
  ])
);
