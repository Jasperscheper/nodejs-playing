const {Block} = require("./Block");
const Math = require('mathjs');

class Sum extends Block{
    constructor(config){

        super({...config});

        this.returnType = 'Number';
        this.inputType = 'Number:Array'

        this.prepareExecute();

    }

    execute = () => {
        return (Math.sum(...this.input));
    }

    
}

module.exports = Sum;