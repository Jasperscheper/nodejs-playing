const {Block} = require("./Block");
const math = require('mathjs');

class Multiply extends Block{
    constructor(config){

        super({...config});

        this.returnType = 'Number';
        this.inputType = 'Number:Array'

        this.prepareExecute();

    }

    execute = () => {
        return (this.input[0] * this.input[1]);
    }

    
}

module.exports = Multiply;