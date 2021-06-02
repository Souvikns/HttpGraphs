const Chart = require('./chart');

class Line extends Chart {
    constructor(config) {
        super(config)
    }

    svg() {
        return ""
    }
};

module.exports = Line;