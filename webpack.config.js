const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./frontend/index.js',
    output:{
        path:path.join(__dirname,'backend/public'),
        filename:'js/bundle.js'
    },
    mode:"development",
    devServer: {
        historyApiFallback: true,
      },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:'/node_modules/'
            },
            {
                test:/.(jpg|png|gif|svg|jpeg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'img/',
                            useRelativePath:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./frontend/index.html',
        }),
        new miniCssExtractPlugin({
            filename:'css/[name]-style.css'
        })
    ]
}