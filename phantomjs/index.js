/**
 * Created by Nonjene on 16/7/13.
 */
var shell = require('../util/shell');
var fs = require('fs');

shell
    //.run('phantomjs confess/confess.js https://www.baidu.com performance')
    .run('phantomjs domReady.js')
    .then(stdout=>{
        fs.writeFile('./confess.txt',stdout)
    })
    .catch(err=>console.log(err));