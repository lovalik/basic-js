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

    if( date === undefined ){
        return 'Unable to determine the time of year!';
    } else if( typeof date !== "object" ){
        throw new Error( "Invalid date!" );
    } else if( !( "getFullYear" in date ) ){
        throw new Error( "Invalid date!" );
    } else if( !( "getMonth" in date ) ){
        throw new Error( "Invalid date!" );
    } else if( !( "getHours" in date ) ){
        throw new Error( "Invalid date!" );
    } else if( !( "getMinutes" in date ) ){
        throw new Error( "Invalid date!" );
    } else if( !( "getSeconds" in date ) ){
        throw new Error( "Invalid date!" );
    }
    
    try {
        date.toUTCString();
    } catch {
        throw new Error('Invalid date!')
    }

    let regexp = new RegExp(/^([\w]{3})\s([\w]{3})\s([\d]{2})\s([\d]{4})\s([\d]{2})(:)([\d]{2})(:)([\d]{2})\s([\w]{3})(\+|\-)([\d]{2})([\d]{2})\s(\()([А-я\s,A-z]{1,30})(\))$/);
    const dateToString = date.toString();
    const match = dateToString.match( regexp )
    console.log( match );

    const dayOfWeek = match[1];
    const month = match[2];
    const currentDate = Number( match[3] );
    const year = Number( match[4] );
    const hours = Number( match[5] );
    const colon1 = match[6]
    const minutes = Number( match[7] );
    const colon2 = match[8]
    const seconds = Number( match[9] );
    const abrGMT = match[10];
    let sign = match[11];
    const gmtHours = match[12];
    const gmtMinutes = match[13];
    const openParenth = match[14];
    const text = match[15];
    const closeParenth = match[16];

    function calculateOffset(){
        if ( sign === "+" ){
            sign = "-";
        } else {
            sign = "+";
        }
        return `${sign}${ Number( gmtHours ) * 60 + Number( gmtMinutes )}`; 
    }

    function getDayOfWeek( ){
        switch ( date.getDay() ) {
            case 0:
                return "Sun";
            case 1:
                return "Mon"
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu"
            case 5:
                return "Fri"
            case 6:
                return "Sat"
        }
    }

    function getMonth(){
        switch ( date.getMonth() ) {
            case 0:
                return "Jan";
            case 1:
              return "Feb"
            case 2:
                return "Mar";
            case 3:
                return "Apr";
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "Jul"
            case 7:
                return "Aug"
            case 8:
                return "Sep"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
            case 11:
                return "Dec"
        }
    }

    const offset = calculateOffset();
    console.log( offset ) 

    if( year !== date.getFullYear() ){
        throw new Error( "Invalid date!" );
    } else if( hours !== date.getHours() ){
        throw new Error( "Invalid date!" );
    } else if( minutes !== date.getMinutes() ){
        throw new Error( "Invalid date!" );
    } else if( seconds !== date.getSeconds() ){
        throw new Error( "Invalid date!" );
    } else if( Number( offset ) !== date.getTimezoneOffset() ){
        throw new Error( "Invalid date!" );
    } else if( "GMT" !== abrGMT ){
        throw new Error( "Invalid date!" );
    } else if( getDayOfWeek() !== dayOfWeek ){
        throw new Error( "Invalid date!" );
    } else if( getMonth() !== month ){
        throw new Error( "Invalid date!" );
    } else if( currentDate !== date.getDate() ){
        throw new Error( "Invalid date!" );
    } else if( colon1 !== ":" && colon2 === ":"){
        throw new Error( "Invalid date!" );
    } else if( colon1 !== ":" && colon2 === ":"){
        throw new Error( "Invalid date!" );
    } else if( openParenth !== "(" && closeParenth !== ")" ){
        throw new Error( "Invalid date!" );
    } else if( !( date instanceof Date ) ){
        throw new Error( "Invalid date!" );
    } else if( typeof text !== "string" ){
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
    
}

module.exports = {
  getSeason
};
