const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

// Write an answer using console.log()
let tempSorted = inputs.sort((a,b) => Math.abs(a) - Math.abs(b) || b - a)



console.log(tempSorted[0] || 0)

