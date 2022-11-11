let elevators = new Map();

var inputs: string[] = readline().split(' ');
const nbFloors: number = parseInt(inputs[0]); // number of floors  find: 1 
const width: number = parseInt(inputs[1]); // width of the area  find: 13
const nbRounds: number = parseInt(inputs[2]); // maximum number of rounds  find: 100
const exitFloor: number = parseInt(inputs[3]); // floor on which the exit is found  find: 0
const exitPos: number = parseInt(inputs[4]); // position of the exit on its floor   find: 2
const nbTotalClones: number = parseInt(inputs[5]); // number of generated clones  find: 10
const nbAdditionalElevators: number = parseInt(inputs[6]); // ignore (always zero)
const nbElevators: number = parseInt(inputs[7]); // number of elevators  find: 0
for (let i = 0; i < nbElevators; i++) {
    var inputs: string[] = readline().split(' ');
    const elevatorFloor: number = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos: number = parseInt(inputs[1]); // position of the elevator on its floor
  
   elevators.set(elevatorFloor, elevatorPos);
}



// game loop
elevators.set(exitFloor, exitPos);

// game loop
while (true) {
  const inputs: string[] = readline().split(" ");
  const cloneFloor: number = Number(inputs[0]);
  const clonePos: number = Number(inputs[1]);
  const direction: string = inputs[2];

  // determine action to take based on current state
  if (cloneFloor === -1) {
    console.log("WAIT");
  } else if (direction === "LEFT" && clonePos < elevators.get(cloneFloor)) {
    console.log("BLOCK");
  } else if (direction === "RIGHT" && clonePos > elevators.get(cloneFloor)) {
    console.log("BLOCK");
  } else {
    console.log("WAIT");
  }
}
