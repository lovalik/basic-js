const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  let arrayFromStr = str.split("");

    let array = new Array();
    let quantity = 1;
    for( let i = 0; i < arrayFromStr.length; i++ ){
        if( arrayFromStr[i] === arrayFromStr[i + 1] ){
            ++quantity;
        } else if( arrayFromStr[i] !== arrayFromStr[i + 1] && quantity !== 1 ) {
            array.push( quantity, arrayFromStr[i] );
            quantity = 1;
        } else if ( arrayFromStr[i] !== arrayFromStr[i + 1] && quantity === 1){
            array.push( arrayFromStr[i] );
        }
    }
    return array.join("");
}

module.exports = {
  encodeLine
};
