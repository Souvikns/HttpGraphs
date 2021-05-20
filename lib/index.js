/**
 * 
 * @param {object} config 
 * @param {string} config.type type of the graph line| bar
 * @param {object | Array} config.data data points for the graph 
 * @param {Array<string>} config.labels labels for data
 */
export const generateGraph = (config) => {
  const { type, data, labels } = config
  console.log(data, labels)
  switch(type){
    case "bar":
      return BarGraph();
  }

  return BarGraph();
}

const BarGraph = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="854" height="442" viewBox="0 0 854 442">
  <g id="Rectangle_1" data-name="Rectangle 1" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="854" height="442" stroke="none"/>
    <rect x="0.5" y="0.5" width="853" height="441" fill="none"/>
  </g>
  <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(55 129)" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="92" height="313" stroke="none"/>
    <rect x="0.5" y="0.5" width="91" height="312" fill="none"/>
  </g>
  <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(188 233)" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="92" height="209" stroke="none"/>
    <rect x="0.5" y="0.5" width="91" height="208" fill="none"/>
  </g>
  <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(321 52)" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="92" height="390" stroke="none"/> 
    <rect x="0.5" y="0.5" width="91" height="389" fill="none"/>
  </g>
</svg>
`
}