module.exports = require('babel-jest').createTransformer({
  presets: ['@babel/env', '@babel/react', '@babel/preset-react'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ],
})
