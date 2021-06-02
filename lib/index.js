/**
 * This library will generate SVG graphs according to the data points
 */

import Bar from './bar';

class Chart {
    bar(config) {
        return new Bar(config);
    }
}

module.exports = Chart;