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
      // throw new NotImplementedError('Not implemented');
    
      calculateDepth( array ) {
        let i = 1;

        if ( this.checkArrayFlat( array ) === 1 ) {
            console.log( `мас___сив${JSON.stringify(array)}___глубина${1}`)
            return 1;
        } else {
            // let item = this.checkArrayFlat( array )
            i = i + this.calculateDepth( array.flat() )
            console.log( `массив${JSON.stringify(array)}___глубина${i}`)
            return i;
        }
    }
    
    checkArrayFlat( array ){
        for( let item of array ){
            if ( Array.isArray( item ) ){
                return item; 
            }
        }
        return 1;
    }
}

module.exports = {
  DepthCalculator
};
