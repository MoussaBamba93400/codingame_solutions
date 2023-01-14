/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let grille = [];
let cordo = []
for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    grille.push(line.split(''))
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.error(grille)
for(let i =0; i < grille.length; i++) {

    for(let j = 0; j < grille[i].length; j++) {
        if(grille[i][j] === "0") {
            cordo.push(i+ " "+ j)
        } 
    }
}
console.error(cordo)

for(let i =0; i< cordo.length; i++) {
   let arr = cordo[i].split(' ');
   let y = Number(arr[0]);
   let x = Number(arr[1]);
   
   let right = "";
   let down ="";

   if(x === grille[y].length -1 ){
 
right = "-1 -1";
   } else {

    for(let i = x +1; i < grille[y].length ; i++) {
        
        if(grille[y][i] === ".") {
           right = "-1 -1";
        } else {
         right = i +  " " + y;
         i = grille[y].length;
        }
    }

}

if(y === grille.length - 1) {
    down = "-1 -1";
} else {


for(let i = y + 1; i < grille.length; i++) {

    if(grille[i][x] === ".") {
     down = "-1 -1";
    } else {
     down = x + " " + i;
     i = grille.length
    }
}

}

   console.log(x + " "+ y + " " +  right + " " + down)



}


