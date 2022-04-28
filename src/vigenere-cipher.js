const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor( value ) { 
    this.whatMachine = value;
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
};

encrypt( wordToEncrypt, key ){

    if( arguments.length === 0 || !wordToEncrypt || !key ){
      throw new Error( `Incorrect arguments!` );
    }

    const keyWord = this.createKeyWord( wordToEncrypt, key );
    if( this.whatMachine === undefined ){
        console.log( "direct");
        return this.directEncryptMachine( wordToEncrypt, keyWord )
    } else if ( this.whatMachine === false ) {
        console.log( "reversed");
        return this.reversedEncryptMachine( wordToEncrypt, keyWord )
    }
}

decrypt( wordToDecrypt, key ){

    if( arguments.length === 0 || !wordToDecrypt || !key ){
      throw new Error( `Incorrect arguments!` );
    }

    const keyWord = this.createKeyWord( wordToDecrypt, key );

    if( this.whatMachine === undefined ){
        console.log( "direct");
        return this.directDecryptMachine( wordToDecrypt, keyWord )
    } else if ( this.whatMachine === false ) {
        console.log( "reversed");
        return this.reversedDecryptMachine( wordToDecrypt, keyWord )
    }
}

directEncryptMachine( wordToEncrypt, keyWord ) {

    let array = []

    for( let i = 0; i < wordToEncrypt.length; i++ ){
        console.log(wordToEncrypt[i])
        if( this.checkSymbolIsMatchLatinAlphabet( wordToEncrypt[i] ) ){
            let letterOfWordToEncryp = wordToEncrypt[i];
            let letterOfKeyWord = keyWord[i];
            console.log( `${ letterOfWordToEncryp }___${ letterOfKeyWord }`)
            let encryptedSymbol = this.getCodeSymbol( { letterOfWordToEncryp, letterOfKeyWord } )
            array.push( encryptedSymbol )
        } else {
            array.push( wordToEncrypt[i] )
        }
    }
    return `${array.join('')}`;
}

directDecryptMachine( wordToDecrypt, keyWord ) {

    let array = []

    for( let i = 0; i < wordToDecrypt.length; i++ ){
        console.log(wordToDecrypt[i])
        if( this.checkSymbolIsMatchLatinAlphabet( wordToDecrypt[i] ) ){
            let letterOfWordToDecrypt = wordToDecrypt[i];
            let letterOfKeyWord = keyWord[i];
            console.log( `${ letterOfWordToDecrypt }___${ letterOfKeyWord }`)
            let decryptedSymbol = this.getCodeSymbolForDecrypt( { letterOfWordToDecrypt, letterOfKeyWord } )
            array.push( decryptedSymbol )
        } else {
            array.push( wordToDecrypt[i] )
        }
    }
    return `${array.join('')}`;
}

createKeyWord( wordToEncrypt, key ){
    let array = [];
    let multiplicity = 0;

    for( let i = 0; i < wordToEncrypt.length; i++ ){
        multiplicity = Math.floor( i / key.length );
        array.push( key[i - multiplicity * key.length ]);
    }

    for( let i = 0; i < wordToEncrypt.length; i++ ){
        if( !this.checkSymbolIsMatchLatinAlphabet( wordToEncrypt[i] )){
            array.splice(i,0, wordToEncrypt[i] )
        }
    }
    array = array.slice(0, wordToEncrypt.length )

    console.log( `=====${array.join('')}`)
    return array.join('');
}

checkSymbolIsMatchLatinAlphabet( symbol ){
    const alphabet = this.alphabet;
    for( let i = 0; i < alphabet.length; i++ ){
        if( symbol.toUpperCase() === alphabet[i] ) return true
    }
    return false;
}

getCodeSymbol( { letterOfWordToEncryp, letterOfKeyWord }  ){
    const index = this.getIndex( letterOfWordToEncryp );
    console.log( index );
    const offsetSequence = this.getOffsetSequence( letterOfKeyWord )
    console.log( offsetSequence );
    return offsetSequence[index];
}

getCodeSymbolForDecrypt( { letterOfWordToDecrypt, letterOfKeyWord } ) {
    const offsetSequence = this.getOffsetSequence( letterOfKeyWord )
    const index = this.checkIsMatch( letterOfWordToDecrypt, offsetSequence );
    console.log( index );
    return this.alphabet[index];
}

checkIsMatch( symbol, array ){
    let index;
    for( let i = 0; i < array.length; i++ ){
        if( symbol === array[i] )
        return index = i;
    }
}

reversedEncryptMachine( wordToEncrypt, keyWord ) {
    let array = []

    for( let i = 0; i < wordToEncrypt.length; i++ ){
        console.log(wordToEncrypt[i])
        if( this.checkSymbolIsMatchLatinAlphabet( wordToEncrypt[i] ) ){
            let letterOfWordToEncryp = wordToEncrypt[i];
            let letterOfKeyWord = keyWord[i];
            console.log( `${ letterOfWordToEncryp }___${ letterOfKeyWord }`)
            let encryptedSymbol = this.getCodeSymbol( { letterOfWordToEncryp, letterOfKeyWord } )
            array.push( encryptedSymbol )
        } else {
            array.push( wordToEncrypt[i] )
        }
    }
    return `${array.reverse().join('')}`;
}

reversedDecryptMachine( wordToDecrypt, keyWord ) {
    let array = []

    for( let i = 0; i < wordToDecrypt.length; i++ ){
        console.log(wordToDecrypt[i])
        if( this.checkSymbolIsMatchLatinAlphabet( wordToDecrypt[i] ) ){
            let letterOfWordToDecrypt = wordToDecrypt[i];
            let letterOfKeyWord = keyWord[i];
            let encryptedSymbol = this.getCodeSymbolForDecrypt( { letterOfWordToDecrypt, letterOfKeyWord } )
            array.push( encryptedSymbol )
        } else {
            array.push( wordToDecrypt[i] )
        }
    }
    return `${array.reverse().join('')}`;
}


getOffsetSequence( letter ){
    let sequence = [];
    const alphabet = this.alphabet;
    for( let i = 0; i < this.alphabet.length; i++ ){
        if ( alphabet[i] === letter.toUpperCase() ){
            return sequence.concat( alphabet.slice( i, alphabet.length  ), alphabet.slice( 0, i  )  )
        } else {
            continue;
        }
    }
    return false
}

getIndex( letter ){
    const alphabet = this.alphabet;
    for( let i = 0; i < alphabet.length; i++ ){
        if ( alphabet[i] === letter.toUpperCase() ) return i;
    }
    return false
}
}

module.exports = {
  VigenereCipheringMachine
};
