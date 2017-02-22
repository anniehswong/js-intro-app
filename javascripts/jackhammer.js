// 1. Create a game (called Click-A-Box) where there is just one box and you have to click it once to win. Use the existing ‘jackhammer’ route for this game.
// 2. Create a game (called Click-A-Box) where there is just one box and you have to click it five times to win. Use the existing ‘jackhammer’ route for this game. NOTE: This is not easy!
// 3. Bonus: Create a new game (called Click-All-The-Boxes) - in which there are 3 boxes, and you need to click each box at least once to win. Use the existing ‘three’ route for this game.
// 4. Extra Bonus: The Numbers Game: There should be 10 boxes in the screen, each containing one of the numbers 1 through 10. To win, you must click on all 10 boxes in order. Use the existing ‘numbers’ route.

//make a counter
var counter = 0;
function jackhammer() {
  //increase counter by 1
  counter ++;
  if (counter >= 5) {
    alert("You Win!");
  }
}

