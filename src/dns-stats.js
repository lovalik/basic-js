const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  // throw new NotImplementedError('Not implemented');
  let obj = {};

  if ( domains.length === 0 ){
      return obj
  }

  const regexpDomain = new RegExp(/(.[\w]{2,5})$/);
  let domain = [];
  const regexpSubDomain = new RegExp(/\.([\w]{2,15})\./)
  let subDomain = [];
  const regexpSubDomain2 = new RegExp(/^([\w]{2,15})?/)
  let subDomain2 = [];

  for ( let item of domains ){

      if( item.match( regexpDomain ) !== null ){
          domain.push( item.match( regexpDomain )[1] );
      }

      if ( item.match( regexpSubDomain ) !== null ){
          subDomain.push( item.match( regexpSubDomain )[1] );
      }

      if ( item.match( regexpSubDomain2 ) !== null ){
          subDomain2.push( item.match( regexpSubDomain2 )[1] );
      }
  }

  obj[ domain[0]] = domain.length;

  if( subDomain2.length !== 0 && subDomain.length !== 0 ){
      obj[ domain[0] + "." + subDomain[0] ] = subDomain.length;
      for( let item of subDomain2 ){
          if( item === subDomain[0]){
              obj[ domain[0] + "." + subDomain[0] ] = obj[ domain[0] + "." + subDomain[0] ] + 1
              continue;
          } else {
              obj[ domain[0] + "." + subDomain[0] + "." + item ] = 1
          }
      }
  } else if( subDomain2.length !== 0 && subDomain.length === 0  ){
      for( let item of subDomain2 ){
          
              obj[ domain[0] + "." + item ] = 1
      }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
