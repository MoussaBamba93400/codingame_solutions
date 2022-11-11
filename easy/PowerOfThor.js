
var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

var thorX = initialTx;
var thorY = initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    let dirX = "";
    let dirY = "";

    if(thorX < lightX) {
        thorX = thorX +1;
        dirX = "E";
    } else if(thorX > lightX) {
        thorX = thorX - 1;
        dirX = "W"
    };

    if(thorY < lightY) {
        thorY = thorY + 1;
        dirY = "S"
    } else if(thorY > lightY) {
        thorY = thorY - 1;
        dirY = "N"
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(dirY + dirX);
}
