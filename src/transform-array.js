const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( initArray ) {
    // throw new NotImplementedError('Not implemented');
    if ( !Array.isArray( initArray ) ){
      throw new Error( `'arr' parameter must be an instance of the Array!`);
  }

  let array = new Array();
  
  if( initArray.length <= 2 ){
      array = initArray.slice();
      return array; 
  }

  for ( let i = 0; i < initArray.length; ){

      if( initArray[i] !== "--discard-prev" && initArray[i] !== "--discard-next" && initArray[i] !== "--double-next" && initArray[i] !== "--double-prev" ){
          array.push( initArray[i] );
          i++;
      } else if( initArray[i] === "--discard-prev" && array.length !== 0 && initArray.length > 2 ){
          array.pop();
          i++;
      } else if( initArray[i] === "--double-prev" && array.length !== 0 && initArray.length > 2 ){
          array.push( array[array.length - 1] );
          i++;
      } else if ( initArray[i] === "--double-prev" && array.length === 0 && initArray.length === 2 ){
          return  array = initArray.slice();
      } else if( initArray[i] === "--discard-next" && i + 1 < initArray.length && initArray.length > 2 ){
          array.push( null );
          i += 2;
      } else if( initArray[i] === "--double-next" && i + 1 < initArray.length && initArray.length > 2 ){
          array.push(initArray[ i + 1 ], initArray[ i + 1 ] );
          i = i + 2;
      } else if( initArray[i] === "--double-next" && i + 1 < initArray.length && initArray.length === 2){
          return  array = initArray.slice();
      } else {
        i++;
      }
  }

  array = array.filter( ( item ) => item !== null );     

  return array;
}

module.exports = {
  transform
};
