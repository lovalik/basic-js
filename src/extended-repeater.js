const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, object ) {
  // throw new NotImplementedError('Not implemented');


  let obj = {};
    let arr = Array();
    let additions = Array();

    if( typeof str === "object" && str === null ){
        str = String(str);
    } else if ( typeof str === "object" && Array.isArray( str )  ){
        str = str.toString()
    } else if( typeof str === "object" && !Array.isArray( str ) && str !== null ){
      str = str.valueOf()
    } else if( typeof str !== "object" && typeof str !== "string" ){
        str = String(str);
    }

    if( object === undefined){
        return str;
    } else if( !checkIsEmpty( object ) ){
        return str
    } else {
        obj = object;
    }

    function checkIsEmpty( obj ){
        for ( let key in obj ){
            return true;
        }
    }

    if( "addition" in obj && obj.addition === null ){
      obj.addition = `${obj.addition}`;
    } else if ( "addition" in obj && typeof obj.addition === "object" && Array.isArray( obj.addition )  ){
      obj.addition = obj.addition.toString()
    } else if( "addition" in obj && typeof obj.addition === "object" && !Array.isArray( obj.addition ) && obj.addition !== null ){
      obj.addition = obj.addition.valueOf()
    } else if( "addition" in obj && typeof obj.addition !== "object" && typeof obj.addition !== "string" ){
      obj.addition = String(obj.addition);
    }

    if( !( "repeatTimes" in obj ) && "addition" in obj ){
        return str + obj.addition;
    }

    if( !( "separator" in obj ) ){
        obj.separator = '+'
    }

    if( !(  "addition" in obj ) ){
        obj.addition = "";
    }

    if( !( "additionSeparator" in obj ) ){
        obj.additionSeparator = '|'
    }

    if( !( "additionRepeatTimes" in obj ) ){
        obj.additionRepeatTimes = 0;
    }

    if( Number(obj.additionRepeatTimes) === 0 || Boolean( Number(obj.additionRepeatTimes) ) === false || Boolean( obj.additionRepeatTimes ) === false ){
        obj.additionRepeatTimes = 0;
    }

    function formArray( string, separator, numberOfRepeat, array ){

        if( numberOfRepeat === 0 ){
            return [ obj.addition ]
        }

        for( let i = 0; i < numberOfRepeat; i++ ){
            if( i === 0 ){
                array.push( string )
            } else {
                array.push( separator, string )
            }
        }
        return array
    }

    obj.repeatTimes = Math.floor( obj.repeatTimes );
    obj.additionRepeatTimes = Math.floor( obj.additionRepeatTimes )

    additions = formArray( obj.addition, obj.additionSeparator, obj.additionRepeatTimes, additions ).join('');  
    console.log( additions )
    
    for( let i = 0; i < obj.repeatTimes; i++ ){
        if( i === 0 ){
            arr.push( str, additions )
        } else {
            arr.push( obj.separator, str, additions )
        }
    }

    return arr.join('');
}

module.exports = {
  repeater
};
