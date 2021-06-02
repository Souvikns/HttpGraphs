/**
 * This library will generate SVG graphs according to the data points
 */

import Bar from './bar';
import Line from './line';

class Chart {
    bar(config) {
        return new Bar(config);
    }

    line(config) {
        return new Line(config);
    }
}

module.exports = Chart;