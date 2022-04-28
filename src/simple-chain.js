const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

    getLength() {
        let numberOfLinks = 0;
        throw new NotImplementedError('Not implemented');
        for( let i = 0; i < this.chain.length; i++ ){
            if( this.chain[i] === "(" ){
                ++numberOfLinks 
            }
        }
        return numberOfLinks;
    },

    addLink( position ) {
        const link = `( ${position} )`;
        const links = '~~';
        this.chain = this.chain + links + link;
        
        return this
    },

    removeLink( position ) {
        const link = `( ${position} )`;
        const links = '~~';

        // if( isNaN( Number( position )) || !checkPosition( link, this.chain ) ){
        //     throw new Error( `You can't remove incorrect link!` )
        // }

        function checkPosition( link, chain ){
            if( chain.includes( link ) ){
                return true
            } else {
                return false;
            }
        }

        function checkIsFirstPosition( link, links, chain ){
            if( chain.includes( `${links}${link}` ) ){
                return false
            } else {
                return true;
            }
        }

        if( checkIsFirstPosition( link, links, this.chain ) && this.chain.includes( `${links}` ) ){
            this.chain = this.chain.replace(`${link}${links}`, "" );
        } else if( checkIsFirstPosition( link, links, this.chain ) && !this.chain.includes( `${links}${link}` ) ){ 
            this.chain = this.chain.replace(`${link}`, "" );
        } else {
            this.chain = this.chain.replace( `${links}${link}`, "" );
        }

        return this
    },

    reverseChain() {
        let array = this.chain.split(`~~`);
        array = array.reverse().join("~~");
        this.chain = array
        return this
    },

    finishChain() {
        delete this.chain;
    }
};

module.exports = {
  chainMaker
};
