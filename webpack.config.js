var path  = require('path');

module.exports = {
    entry: {
        bundleMain:["./src/js/main.js"],
        bundleCss:["./src/scss/m-common.scss"],
        bundleLib:["jquery"]
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "[name].js"
    },
    plugins: []
};