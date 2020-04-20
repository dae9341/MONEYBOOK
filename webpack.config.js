var path  = require('path');
var HtmlWebPackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
var VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: { // bundle대상 (오리지날 소스)
        bundleMain:["./src/js/index.js"],
        bundleCss:["./src/scss/m-common.scss"],
        bundleLib:["jquery"]
    },
    output: { // output으로 출력 (결과물)
        path: path.resolve(__dirname + "/dist"),
        filename: "[name].js"
    },

    devServer: { //webpack-dev-server 실시간 리로드 개발서버
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]

            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,"css-loader","sass-loader"
                ]

            },
            {
                test: /\.html$/, //확장자
                use: [ //loader와 option선택
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: "vue-loader"
                    }
                ]

            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({ //html 생성 플러그인
            inject: 'body', //head에 스크립트를 추가하면 vue가 랜더링 되지않음 이것때문에 한시간 가량 삽질함.(ASIS:head , TOBE:body by 20200420)
            template: "./src/index.html",
            filename: "index.html" // output으로 출력할 파일이름
        }),
        new MiniCssExtractPlugin({ //기존 css도 js로 번들링했음. (js에서 style태그로 넣어주는 방식) => css파일로 번들링 해주는 플러그인
            filename: "[name].css" // output으로 출력할 파일이름
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
};