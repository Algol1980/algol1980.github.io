var uncss = require('uncss');

var files   = ['my', 'array', 'of', 'HTML', 'files'],
    options = {
        ignore       : ['#added_at_runtime', /test\-[0-9]+/],
        media        : ['(min-width: 700px) handheld and (orientation: landscape)'],
        csspath      : '../public/css/',
        raw          : 'h1 { color: green }',
        stylesheets  : ['lib/bootstrap/dist/css/bootstrap.css', 'src/public/css/main.css'],
        ignoreSheets : [/fonts.googleapis/],
        urls         : ['http://localhost:3000/mypage', '...'], // Deprecated
        timeout      : 1000,
        htmlroot     : 'public'
    };

uncss(files, options, function (error, output) {
    console.log(output);
});

/* Look Ma, no options! */
uncss(files, function (error, output) {
    console.log(output);
});

/* Specifying raw HTML */
var raw_html = '...';
uncss(raw_html, options, function (error, output) {
    console.log(output);
});