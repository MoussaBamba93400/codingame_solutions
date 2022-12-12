// Back in the day, people had fun turning "recipes" into surprise images using typewriters.

// Use the provided recipe to create a recognizable image.

// Chunks in the recipe are separated by a space.
// Each chunk will tell you either
// nl meaning NewLine (aka Carriage Return)
// ~or~
// how many of the character and what character

// For example:
// 4z means zzzz
// 1{ means {
// 10= means ==========
// 5bS means \\\\\ (see Abbreviations list below)
// 27 means 77
// 123 means 333333333333
// (If a chunk is composed only of numbers, the character is the last digit.)

// So if part of the recipe is
// 2* 15sp 1x 4sQ nl
// ...that tells you to show
// **               x''''
// and then go to a new line.


// Abbreviations used:
// sp = space
// bS = backSlash \
// sQ = singleQuote '
// and
// nl = NewLine

const T = readline(); //String provided
const TArray = T.replace(/nl/i, "N").split(' ');

let returnedString = ""

let specialCharMap = new Map();
specialCharMap.set('sp', ' ')
specialCharMap.set('bS', '\\')
specialCharMap.set('sQ', "'")


function indexFirstNanChar(str) {
    return str.split('').map((elem,id) => Number.isInteger(Number(elem))).indexOf(false)
}


function iterationChar(num, char) {
  var result = "";

    for(let j=0; j < num; j++) {

        result += char
    }
    return result;
}


for(let i=0; i < TArray.length; i++) {

    if(/^\d+$/.test(TArray[i])) {

        returnedString += iterationChar(Number(TArray[i].slice(0,  TArray[i].length - 1)),  TArray[i].slice( TArray[i].length - 1))
           
    } else if(/[0-9]/.test(TArray[i])) {
        let indexOfCharDebut = indexFirstNanChar(TArray[i]);
        let num = Number(TArray[i].slice(0, indexOfCharDebut));
        let Char = TArray[i].slice(indexOfCharDebut);
         
        Char = specialCharMap.has(Char)? specialCharMap.get(Char): Char;
        returnedString += iterationChar(num, Char);

    } else {
        returnedString += "\n"
    }
}

console.log(returnedString);


