//create new obj called team
const team = {
    //create private array with 3 entries
    _players: [
    {firstName: 'Pete', lastName: 'Wheeler', age: 54},  
    {firstName: 'Shak', lastName: 'Davis', age: 40},
    {firstName: 'Yung', LastName: 'Buck', age: 16}
    ],
    _games: [
      {opponent: 'Rabbits', teamPoints: 10, opponentPoints: 8},
      {opponent: 'Bears', teamPoints: 12, opponentPoints: 14},
      {opponents: 'Ravens', teamPoints: 15, opponentPoints: 3}
      ],
      //return players in array _players
      get players() {
        return this._players;
      },
      get games() {
        return this._games;
      },
      //creates a local variable player, and inserts this into the _player array using .push() method on array
      addPlayer(newFirstName, newLastName, newAge) {
        let player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
        };
        this.players.push(player);
      },
      addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        }
        this.games.push(game);
      }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 20, 18);
  console.log(team.games);
  
  