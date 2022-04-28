const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(adress) {
  // throw new NotImplementedError('Not implemented');
  let regexp = new RegExp(/\b[\w|-]{0,25}\.[\w]{0,5}$/);
  let array = adress.match( regexp );
  console.log(JSON.stringify(array))
  if( array.length !== 0) {
      return array.join(",")
  }
}

module.exports = {
  getEmailDomain
};
