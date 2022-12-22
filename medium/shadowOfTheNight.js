// Vous allez rechercher les otages d'un batiment donné en sautant de fenêtre en fenêtre à l'aide de votre grappin. Votre but est d'arriver sur la fenêtre de la pièce où les otages se trouvent afin de désamorcer les bombes. Malheureusement vous n'avez qu'un nombre de sauts limités avant que les bombes n'explosent...
//  	Règles
// Avant chaque saut, le détecteur vous fournira la direction des bombes par rapport à votre position actuelle :
// U (Up : les bombes sont situées au dessus)
// UR (Up-Right : les bombes sont situées au dessus et à droite)
// R (Right : les bombes sont situées à droite)
// DR (Down-Right : les bombes sont situées en dessous et à droite)
// D (Down : les bombes sont situées en dessous)
// DL (Down-Left : les bombes sont situées en dessous et à gauche)
// L (Left : les bombes sont situées à gauche)
// UL (Up-Left : les bombes sont situées au dessus et à gauche)

// Votre mission consiste à programmer le détecteur afin qu'il indique la position de la fenêtre sur laquelle vous devrez vous rendre au saut suivant de sorte que vous atteignez les bombes le plus tôt possible.

// Les bâtiments sont représentés par des rectangles de fenêtres, la fenêtre en haut à gauche a pour position (0,0).


var inputs = readline().split(' ');
const W = Array.from({length: parseInt(inputs[0])}, (v, i) => i); // width of the building.
const H = Array.from({length: parseInt(inputs[1])}, (v,i) =>i); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

// game loop

function binarySearch(arr, left = 0, right = arr.length -1) {
let mid = Math.floor((left + right) / 2);

return mid

}

let posX = X0
let posY = Y0

let currHeightLeft = 0;
let currHeightRight = H.length - 1;

let currWidthLeft = 0;
let currWidthRight = W.length -1


while (true) {
   const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
   

  switch(bombDir) {

   case "U": 
      currHeightRight = posY -1
      posY = binarySearch(H, currHeightLeft, currHeightRight)
      break;


   case "UR": 
   currHeightRight = posY -1;
   posY = binarySearch(H, currHeightLeft, currHeightRight);

   currWidthLeft = posX + 1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;
      
   case "R": 
   currWidthLeft = posX + 1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;


   case "DR": 
   currHeightLeft = posY +1;
   posY = binarySearch(H, currHeightLeft, currHeightRight);
      
   currWidthLeft = posX + 1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;

   case "D": 
   currHeightLeft = posY +1;
   posY = binarySearch(H, currHeightLeft, currHeightRight);
   break;
   
   case "DL": 
   currHeightLeft = posY +1;
   posY = binarySearch(H, currHeightLeft, currHeightRight);

   currWidthRight = posX -1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;

   case "L": 
   currWidthRight = posX -1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;
    
    
   case "UL": 
   currHeightRight = posY -1
   posY = binarySearch(H, currHeightLeft, currHeightRight);
   
   currWidthRight = posX -1;
   posX = binarySearch(W, currWidthLeft, currWidthRight);
   break;

     
  }
  
   console.log(posX + ' ' + posY);
}




