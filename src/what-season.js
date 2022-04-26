const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason( date ) {
    throw new NotImplementedError('Not implemented');

    if( date === undefined ){
        return 'Unable to determine the time of year!';
    } else if( date.getYear === undefined || typeof date.getYear !== "function" ){
        throw new Error( "Invalid date!" );
    } else if( typeof date !== "object" ){
        throw new Error( "Invalid date!" );
    } else if( !typeof date.getTime() === "number" && !date.getTime() > 0 ){
        throw new Error( "Invalid date!" );
    } else if( JSON.stringify( date ) === "null" ) {
        throw new Error( "Invalid date!" );
    }
       
    if ( 0 <= date.getMonth() && date.getMonth() <= 1 || date.getMonth() === 11 ){
        return 'winter';
    } else if ( 2 <= date.getMonth() && date.getMonth() <= 4 ){
        return 'spring';
    } else if ( 5 <= date.getMonth() && date.getMonth() <= 7 ){
        return 'summer';
    } else if ( 8 <= date.getMonth() && date.getMonth() <= 10 ){
        return "autumn";
    }

    let regexp = new RegExp(/\b(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\b\s\b(Jan|Feb|Mar|Apr|May|Jun|July|Aug|Sept|Oct|Nov|Dec)\b\s\b[0-3][0-9]\b\s\b[1-2][0-3][0-9][0-9]\b\s\b[0-2][0-9]:[0-5][0-9]:[0-5][0-9]\b\s\b(GMT\+[0-1][0-9][0|3][0])\b/);
    const dateToString = date.toDateString();
    if( !dateToString.match( regexp ) ){
        throw new Error( "Invalid date!" );
    }
}

module.exports = {
  getSeason
};
