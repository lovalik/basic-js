const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
    chain: ``,

    getLength() {
        console.log("длина")
        let numberOfLinks = 0;

        if( this.chain.length > 0 ){
            for( let i = 0; i < this.chain.length; i++ ){
                if( this.chain[i] === "(" ){
                    ++numberOfLinks 
                }
            }
            return numberOfLinks;
        } else {
            return 0;
        }
    },

    addLink( position ) {
        if( position === undefined ){
            position = ""
        }
        const link = `( ${position} )`;
        const links = '~~';

        if( this.chain.length === 0 ){
            this.chain = link
            console.log(`добавление${ link }`)
        } else {
            this.chain = this.chain + links + link;
            console.log(`добавление${ links + link }`)
        }
        
        return this
    },

    removeLink( position ) {
        console.log("removeLink")

        console.log( `===длина строки chain_${this.chain.length}` )

        let arr = this.chain.split("~~");
        console.log( `===в массиве_${arr.length}`)

        // try {
            if( !checkPosition( arr, position ) || this.chain.length === 0 ){
                this.chain = "";
                throw new Error( `You can't remove incorrect link!` );
            };
        // } catch {
            // this.chain = "";
            // throw new Error( `You can't remove incorrect link!` );
        // }

        function checkPosition( array, position ){
            console.log( `массив${array}___позиция${position}`)

            if( typeof position !== "number" || isNaN( position ) ){
                console.log( `1`)
                return false;
            }
            
            if ( typeof position === "number" && !Number.isInteger( position) ) {
                console.log( `2`)
                return false;
            } else if( position <= 0 || position >= array.length + 1 || isNaN(position) ){
                console.log( `3`)
                return false;
            } else {
                console.log( `4`)
                return true
            }
        }

        arr.splice( position - 1, 1)
        this.chain = arr.join("~~")
        console.log(`длина строки после удаления ${this.chain.length}`)

        return this
    },

    reverseChain() {
        let array = this.chain.split(`~~`);
        array = array.reverse().join("~~");
        this.chain = array
        return this
    },

    finishChain() {
        let finalChain = this.chain;
        this.chain = ""
        return finalChain;
    }
};

module.exports = {
  chainMaker
};
