const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( currentActivity ) {
  // throw new NotImplementedError('Not implemented');
    if( !Boolean( Number(currentActivity) ) || currentActivity === undefined || Number(currentActivity) < 0 || Number(currentActivity) > 15 || typeof currentActivity !== "string" ){
      return false;
    }
    
    const activity = Number(currentActivity);

    return Math.ceil( Math.log2( MODERN_ACTIVITY / activity ) * HALF_LIFE_PERIOD );
}

module.exports = {
  dateSample
};
