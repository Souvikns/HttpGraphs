
const OUTLINE = `<svg xmlns="http://www.w3.org/2000/svg" width="854" height="442" viewBox="0 0 854 442">
  <g id="Rectangle_1" data-name="Rectangle 1" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="854" height="442" stroke="none"/>
    <rect x="0.5" y="0.5" width="853" height="441" fill="none"/>
  </g>
</svg>
`

class Bar {
    constructor(data, label) {
        this.data = data;
        this.label = label;
        this.svg = `<g id="Rectangle_4" data-name="Rectangle 4" transform="translate(321 52)" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="92" height="${data}" stroke="none"/> 
    <rect x="0.5" y="0.5" width="91" height="${data - 1}" fill="none"/>
  </g>`
    }
}

class Outline {
    constructor(data, label) {
        super(data, label);
    }

    getSvg() {
        let dataPoints = []
        for ([d, index] of data) {
            dataPoints.push({ data: d, label: label[0] });
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" width="854" height="442" viewBox="0 0 854 442">
  <g id="Rectangle_1" data-name="Rectangle 1" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="854" height="442" stroke="none"/>
    <rect x="0.5" y="0.5" width="853" height="441" fill="none"/>
    ${dataPoints.map(data => new Bar(data.data, data.label).svg)}
  </g>
</svg>
`
    }
}

class Bar extends Outline {
    constructor(data, labels) {
        super(data, labels);
    }
}