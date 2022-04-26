const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  // throw new NotImplementedError('Not implemented');
    let obj = {};
    let finishArray = [];

    for( let i = 0; i < array.length; i++ ){
        if( obj[ array[i] ] && obj[ array[i] ] >= 1 ){
            obj[ array[i] ] = obj[ array[i] ] + 1 ;
            let itemWithSuffiks = `${array[i]}` + `(${obj[array[i]]-1})`
            finishArray.push( itemWithSuffiks );
            obj[ itemWithSuffiks ] = 1
        } else {
            obj[ array[i] ] = 1;
            finishArray.push( array[i] );
        }
    }
    return finishArray;
}

module.exports = {
  renameFiles
};
