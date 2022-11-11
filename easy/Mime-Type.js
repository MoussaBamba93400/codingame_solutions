const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let objExtType = {}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.

   objExtType[EXT.toUpperCase()] = MT
 
}

console.error( objExtType)

for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
   
    let arr = FNAME.split('.')
    console.error(arr)
    let result =  objExtType[arr[arr.length - 1].toUpperCase()]
   if(arr.length < 2) {
    console.log('UNKNOWN')
   } else if(result === undefined){

      console.log('UNKNOWN')
   } else {
     console.error(result)
    console.log(result)
      
   }
     
    

}