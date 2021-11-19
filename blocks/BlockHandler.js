const BlockTypes = require("./blockTypes");

const {stringify} = require('javascript-stringify');

const { Multiply, Subtract, Sum } = require("./blockTypes");

const getClass = (name)=> {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const isPresent = Object.keys(BlockTypes).some(key => key === name);
    
    return isPresent ? name : null;
}

const BlockHandler = (config) => {
    
    const blockName = typeof(config) == "object" ? config.blockName ? config.blockName : Object.keys(config)[0]  : '';
    config = typeof(config) === 'object' ? config.config ? config.config : config[blockName] : '';
    const className = getClass(blockName);

    if(!className){
        return;
    }
    return eval(`new ${className}(${stringify(config)})`);
}

module.exports.BlockHandler = BlockHandler;