const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth( array ) {
      throw new NotImplementedError('Not implemented');
        let i = 1;

        function checkArrayFlat( array ){
          for( let item of array ){
              if ( Array.isArray( item ) ){
                  return item; 
              }
          }
          return 1;
        }

      if ( checkArrayFlat( array ) === 1 ) {
          return i;
      } else {
          let item = checkArrayFlat( array )
          i = i + this.calculateDepth( item )
          console.log( `___глубина${i}`)
          return i;
      }  
  }
}

module.exports = {
  DepthCalculator
};
