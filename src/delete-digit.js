const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const arrayFromNumber = String(number).split('');

    let controlArray = new Array();

    for( let i = 0; i < arrayFromNumber.length; i++ ){
        if( controlArray.length === 0 ){
            controlArray.push( sumOfItems( i, arrayFromNumber ) );
        } else if( controlArray[0] < sumOfItems(i, arrayFromNumber ) ){
            controlArray.pop();
            controlArray.push( sumOfItems( i, arrayFromNumber ) );
        } else {
            continue;
        }
    }

    function sumOfItems( index, array ){
        const arr = new Array();

        for( let i = 0; i < array.length; i++ ){
            if( index === i ){
                continue;
            } else {
                arr.push( array[i] )
            }
        }

        let number = Number(arr.join(''));

        return number;
    }
    return Number(controlArray[0])
}

module.exports = {
  deleteDigit
};
