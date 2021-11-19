const Multiply = require("./Multiply");
const Subtract = require("./Subtract");
const Sum = require("./Sum");

const blockTypes = {
    'Multiply': Multiply,
    'Subtract': Subtract,
    'Sum': Sum,
}

module.exports = blockTypes;