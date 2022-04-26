const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( array ) {

    if( !Array.isArray( array ) ) return false;

    let dreamTeamName = [];

    for( let item of array ){
        if ( checkItem( item ) ){
            dreamTeamName.push( getFirstLetter( item ) );
        } else {
            continue;
        }
    }

    if( dreamTeamName.length === 0 ){
        return false;
    } else {
        dreamTeamName = dreamTeamName.sort( compareLetters ).join('');
        return dreamTeamName;
    }

    function compareLetters( a, b ){
        if( a > b ) return 1;
        if( a === b ) return 0;
        if( a < b ) return -1;
    }

    function checkItem( item ){
        if ( typeof item === "string" ){
            return true;
        } else {
            return false;
        }
    }

    function getFirstLetter( item ){
        let newItem = item.split(' ');
        newItem = newItem.join('');
        newItem = newItem.split('');

        return newItem[0].toUpperCase();
    }
}

module.exports = {
  createDreamTeam
};
