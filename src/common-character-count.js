const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
//   throw new NotImplementedError('Not implemented');
let quantity = 0;
const array1 = str1.split("");
const array2 = str2.split("");

let shortArray;
let longArray;
let maxLength;

if ( array1.length >= array2.length ){
    longArray = array2;
    shortArray = array1;
} else {
    longArray = array1;
    shortArray = array2;
}

maxLength = longArray.length;

for ( let i = 0; i < maxLength; ){

    let symbol = shortArray[i];

    let quantity1 = countQuantity( symbol, i, shortArray );
    let quantity2 =  quantityOfMatches( symbol, longArray );

    if ( quantity2 === 0 ){
        i++;
        continue;
    } else if ( quantity1 >= quantity2 ){
        quantity += quantity2;
    } else {
        quantity += quantity1;
    }

    shortArray = shortArray.filter(  item =>  item !== symbol );
    longArray = longArray.filter( item => item !== symbol );
}

function countQuantity( symbol, index, array ){
    let quantity = 1;
    for( let i = 0; i < array.length; i++ ){
        if( symbol === array[i] && index !== i ){
            ++quantity;
        } else{
            continue;
        }
    }
    return quantity;
}

function quantityOfMatches( symbol, array ){
    let quantity = 0;
    for( let item of array ){
        if( symbol === item ){
            ++quantity;
        } else{
            continue;
        }
    }
    return quantity;
} 
  
  return quantity;
}

module.exports = {
  getCommonCharacterCount
};
