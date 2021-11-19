const {BlockHandler} = require('./blocks/BlockHandler');

const configs = [
    {
        'blockName': 'multiply',
        'config': {
            input: [2, 3]
        }
    },
    {
        'blockName': 'Multiply',
        'config': {input: [2, 1], callback: {
            'Subtract': {
                input: [
                    1, '__self__',
                ]
            }
        }}
    },
    {
        'blockName': 'Sum',
        'config': {input: [1,2,3,3,4,5]}
    }
]

for(let config in configs){
    let handler = BlockHandler(configs[config]);
    console.log(handler.getValue());
}


