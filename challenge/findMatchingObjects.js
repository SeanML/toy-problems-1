// Given an array of players (objects), return the names of all players that have a score above 100.

// DO NOT use .filter() in your solution.

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.


// Code:

const topPlayers = (players) => {
  let result = [];
  for(let i = 0; i < players.length; i++) {
    if(players[i].score > 100) result.push(players[i].name);
  }
  return result;
};