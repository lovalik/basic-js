const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  // throw new NotImplementedError('Not implemented');
  let board = [];

    for ( let item of matrix ){
        let clonedItem = item.slice() 
        board.push( clonedItem );
    }

    console.log( JSON.stringify( board ) )
    
    for( let i = 0; i < board.length; i++ ){
        setMine( board[i], i);
    }

    function setMine( item, rowNumber ){

        for( let cellNumber= 0; cellNumber < item.length; cellNumber++ ){
  
            let quantity = 0;
            // matrix__1 ряд / 1 ячейка
            if ( cellNumber === 0 && item.length === 1 && matrix.length === 1  ){
                quantity = 0;
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `1--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
                
            // matrix__1 ряд/n___первая клетка
            } else if ( cellNumber === 0 && item.length >= 2 && matrix.length === 1 ) {
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `2--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__1 ряд /n____последняя клетка 
            } else if( cellNumber === item.length - 1 && item.length >= 2 && matrix.length === 1 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `3--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__1 ряд / от3x____промежуточная клетка
            } else if( cellNumber !==0 && cellNumber !== item.length - 1 && item.length >= 3 && matrix.length === 1 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `4--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов /1___первая клетка первого поля
            } else if( cellNumber === 0 && item.length === 1 && rowNumber === 0 && matrix.length > 1  ){
                quantity = Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `5--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / 1___первая клетка последнего поля
            } else if( cellNumber === 0 && item.length === 1 && rowNumber === matrix.length - 1 && matrix.length > 1 ){
                quantity = Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `6--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / 1___первая клетка промежуточного поля
            } else if( cellNumber === 0 && item.length === 1 && rowNumber !== 0 && rowNumber !== matrix.length - 1 && matrix.length > 2 ){
                quantity = Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `7--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___первая клетка первого ряда
            } else if( cellNumber === 0 && item.length >= 2 && rowNumber === 0 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `8--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___первая клетка последнего ряда
            } else if( cellNumber === 0 && item.length >= 2 && rowNumber === matrix.length - 1 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `9--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___первая клетка промежуточного ряда
            } else if( cellNumber === 0 && item.length >= 2 && rowNumber !== 0 && rowNumber !== matrix.length - 1 && matrix.length >=3 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `10--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___последняя клетка первого ряда
            } else if( cellNumber === item.length -1 && item.length >= 2 && rowNumber === 0 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber - 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `11--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___последняя клетка последнего ряда
            } else if( cellNumber === item.length -1 && item.length >= 2 && rowNumber === matrix.length - 1 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber -1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber - 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `12--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___последняя клетка промежуточного ряда
            } else if( cellNumber === item.length - 1 && item.length >= 2 && rowNumber !== 0 && rowNumber !== matrix.length - 1 && matrix.length >=3 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber - 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `13--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___первый ряд промежуточная клетка
            } else if( rowNumber === 0 && cellNumber !== 0 && cellNumber !== item.length - 1 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number( Boolean(matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `14--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___последний ряд промежуточная клетка
            } else if( rowNumber === matrix.length - 1 && cellNumber !== 0 && cellNumber !== item.length - 1 && matrix.length >=2 ){
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number( Boolean(matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `15--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            // matrix__n рядов / n клеток___промежуточный ряд промежуточная клетка
            } else {
                quantity = Number(Boolean( matrix[ rowNumber ][ cellNumber - 1 ])) + Number( Boolean(matrix[ rowNumber ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber - 1 ][ cellNumber + 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber - 1 ])) + Number(Boolean( matrix[ rowNumber + 1 ][ cellNumber + 1 ]));
                board[ rowNumber ].splice( cellNumber, 1 , quantity )
                console.log( `16--${rowNumber}---${JSON.stringify( board[ rowNumber ] )}`)
            }
        }
    }
    return board;
}

module.exports = {
  minesweeper
};
