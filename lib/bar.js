const Chart = require('./chart');

class Bar extends Chart {
    constructor(config) {
        super(config)
    }

    svg(){
        return ""
    }
}

module.exports = Bar;