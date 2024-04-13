class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
    }
  
    hit() {
      this.hits++;
      if (this.hits >= this.length) {
        this.sunk = true;
      }
    }
  
    isSunk() {
      return this.sunk;
    }
  }

  class Gameboard {
    constructor() {
      this.ships = [];
      this.missedAttacks = [];
    }
  
    placeShip(ship, x, y) {
      // Assuming ship placement logic here
      // This method should place the ship at the specified coordinates
      // and handle any collisions or out of bounds errors
    }
  
    receiveAttack(x, y) {
      // Check if any ship is at the specified coordinates
      let hit = false;
      this.ships.forEach(ship => {
        // Assuming ship collision detection here
        // If a ship is hit, call its hit() method
        if (/* logic to check if ship is at (x, y) */) {
          ship.hit();
          hit = true;
        }
      });
      if (!hit) {
        this.missedAttacks.push({ x, y });
      }
    }
  
    allShipsSunk() {
      return this.ships.every(ship => ship.isSunk());
    }
  }

  class Player {
    constructor(gameboard) {
      this.gameboard = gameboard;
    }
  
    attackOpponent(x, y) {
      this.gameboard.receiveAttack(x, y);
    }
  }
  
  // Assume the creation of gameboards and players
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
const player = new Player(playerGameboard);
const computer = new Player(computerGameboard);

// Game loop
while (!playerGameboard.allShipsSunk() && !computerGameboard.allShipsSunk()) {
  // Player's turn
  // Assume user input for attack coordinates
  const playerAttackX = /* get player's input for X coordinate */;
  const playerAttackY = /* get player's input for Y coordinate */;
  computer.attackOpponent(playerAttackX, playerAttackY);

  // Computer's turn
  // Assume random attack coordinates for simplicity
  const computerAttackX = /* generate random X coordinate */;
  const computerAttackY = /* generate random Y coordinate */;
  player.attackOpponent(computerAttackX, computerAttackY);
}

// Game over, determine winner
if (playerGameboard.allShipsSunk()) {
  console.log("Computer wins!");
} else {
  console.log("Player wins!");
}
