/**
 * Created by Nonjene on 16/7/13.
 */
var shell = require('../util/shell');

shell.run('phantomjs test.js')
    .then(stdout=>console.log(stdout));