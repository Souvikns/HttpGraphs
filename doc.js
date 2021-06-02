const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({files: 'lib/*.js'}).then(data => {
    fs.writeFileSync('./api.md', data, {encoding: "utf-8"});
})