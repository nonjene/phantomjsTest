var page = require('webpage').create();
var system = require('system');
var f=0;
page.onInitialized = function () {
    if(f){return}
    f=1;
    var s = Date.now();
    console.log('onInitialized')
    page.onCallback = function (data) {
        //Do whatever here
        console.log( (Date.now() - s) + 'ms');
        throw(new Error('let me exit'))
    };

    page.evaluate(function () {
        document.addEventListener('DOMContentLoaded', function () {
            window.callPhantom();

        }, false);
    });



};

page.open('https://www.baidu.com', function (status) {
    phantom.exit(1);
});
