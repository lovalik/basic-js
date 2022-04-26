const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  // throw new NotImplementedError('Not implemented');
  let arraySorted = new Array();

    for (let item of array ){
        if( item === -1 ){
            arraySorted.push( item ) 
        } else {
            arraySorted.push( "" ) 
        }
    }

    const arrayOfNumbers = new Array();

    for (let item of array ){
        if( item !== -1 ){
            arrayOfNumbers.push( item ) 
        } else {
            continue;
        }
    }

    arrayOfNumbers.sort( sortArray );

    function sortArray( a, b ){
        if( a > b ) return 1;
        if( a === b ) return 0;
        if( a < b ) return -1;
    }

    for (let i = 0; i < arraySorted.length; i++ ){
        if( Boolean(arraySorted[i]) === false ){
            arraySorted.splice( i, 1 , arrayOfNumbers.shift() ) 
        } else {
           continue;
        }
    }

    return arraySorted
}

module.exports = {
  sortByHeight
};
