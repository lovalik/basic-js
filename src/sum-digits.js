const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
//   throw new NotImplementedError('Not implemented');
    number = Math.abs(number);
    let sum;

    function getSum( number ){

        let array = String( number ).split('');
        let sum = 0;

        for( let i = 0; i < array.length; i++ ){
            sum = sum + Number(array[i])
        }
        return sum;
    }
    
    if( getSum( number ) < 10 ){
        return getSum( number );
    } else {
        sum = getSum( number );
        return getSumOfDigits( sum );       
       
    }
}

module.exports = {
  getSumOfDigits
};
