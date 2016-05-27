# onesie
[![Build Status](http://jenkins.flowstate.io/job/onesie-build-deploy/badge/icon)](http://jenkins.flowstate.io/job/onesie-build-deploy)

## Usage

Onesie makes http calls to a local dev server you can install as follows.

### 1. Start OneOps Dev Server:
```sh
 $ git clone git@github.com:GRT/oo-static-server.git
 $ cd oo-static-server
 $ npm i
 $ npm run serve
```
### 2. Build and serve Onesie:

```
npm run go
```
Navigate to [127.0.0.1:8080](http://127.0.0.1:8080/)

## Utility scripts
 - `npm run kill` kill webpack-dev-server process
 - `npm run clear` nuke node_modules and reinstall
 - `npm start` build and serve

## Notes
1. To generate package.json (which is already included in the project), run:
   npm init

2. Install webpack both gloabally and locally within the project, run:
   npm install webpack --global
   npm install webpack --save-dev

3. Install babel loader, file loader and react, run:
   npm install babel-loader --save-dev
   npm install react --save
   npm install --save react-dom
   npm install file-loader --save-dev

4. Set up webpack dev server, run:
   npm install webpack-dev-server --global
   npm install webpack-dev-server --save-dev

5. To start the dev server, run:
   webpack-dev-server
   
 








