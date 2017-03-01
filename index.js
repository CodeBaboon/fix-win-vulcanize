const path = require('path');
const fs = require('fs');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'project-path', alias: 'p', type: String, defaultOption: true, defaultValue: '' },
    { name: 'vulcanize-path', alias: 'v', type: String, defaultValue: 'node_modules/vulcanize' },
    { name: 'resolver-path', alias: 'r', type: String, defaultValue: 'lib/pathresolver.js'}
];

const options = commandLineArgs(optionDefinitions);
const pathToPathResolver = path.join(options['project-path'], options['vulcanize-path'], options['resolver-path']);

fs.exists(pathToPathResolver, (exists) => {
    if (exists) {
        fs.readFile(pathToPathResolver, 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            var modifiedFile = data.replace(/pathPosix.relative/g, 'path.relative');

            fs.writeFile(pathToPathResolver, modifiedFile, (err) => {
                if (err) {
                    return console.log(err);
                }

                console.log('SUCCESS: vulcanize path resolution fixed for windows after successfully modifying ', pathToPathResolver);
            });
        });
    } else {
        console.log('ERROR: Could not find pathresolver.js at', pathToPathResolver);
    }
});
