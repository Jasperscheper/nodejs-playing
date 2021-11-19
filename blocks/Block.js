const BlockHandler = require('./BlockHandler');

class Block {

    constructor(config, returnType=null){
    
        const { type, input, output, execute, callback=null, steps=[] } = config;
        this.type = type;
        this.input = input;
        this.output = output;
        this.execute = execute;
        // our call back function(s)
        this.callback = callback;
        // keep track of our return type, because we need to use it when using other funcitons (blocks)
        this.returnType = config.returnType ? config.returnType : returnType;
        //store the value of our execute function
        this.value = null;
        // keep track of all modifications we do
        this.steps = steps

    }
    

    prepareExecute = () => {
        let value = this.execute();

        this.value = value;

        this.steps.push({origin: this, value: this.value});
        if(this.callback){

            let key = Object.keys(this.callback)[0];
            
            let selfIndex = this.callback[key].input.findIndex(input_item => input_item === '__self__');

            if(selfIndex > -1){
                this.callback[key].input[selfIndex] = value;
                this.callback[key].steps = this.steps;
            }

            this.value = BlockHandler['BlockHandler'](this.callback).getValue();
        }

        return value;
    }

    formatInputType = () => {
        return this.inputType ? this.inputType : '';
    }

    getValue = () => {
        return this.value;
    }

    getSteps = () => {
        return this.steps;
    }
   
}

module.exports.Block = Block;