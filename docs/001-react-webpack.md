# react + webpack basic env
> Basic env based on react & webpack.

## package:
```shell
ni-s react react-dom react-helmet
ni-d babel-core babel-loader
ni-d webpack webpack-cli webpack-dev-server
```

## package.json:
```json
"dependencies": {
  "react": "^16.4.1",
  "react-dom": "^16.4.1"
},
"devDependencies": {
  "babel": "^6.23.0",
  "babel-core": "^6.26.3",
  "babel-loader": "^7.1.4",
  "babel-plugin-transform-decorators-legacy": "^1.3.5",
  "babel-preset-env": "^1.7.0",
  "babel-preset-react": "^6.24.1",
  "react-hmr-decorator": "github:afeiship/react-hmr-decorator",
  "react-hot-loader": "^4.3.3",
  "webpack": "^4.15.0",
  "webpack-cli": "^3.0.8",
  "webpack-dev-server": "^3.1.4"
},
"scripts": {
  "dev": "webpack-dev-server --hot --env=development"
},
```
