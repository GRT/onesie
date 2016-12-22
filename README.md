# onesie
[![Build Status](http://ec2-54-157-241-76.compute-1.amazonaws.com:8080/job/onesie-build-deploy/badge/icon)](http://ec2-54-157-241-76.compute-1.amazonaws.com:8080/job/onesie-build-deploy/)

Onesie is a dashboard for summarizing useful date from a [OneOps](http://oneops.com/) instance.

## Usage

Onesie makes http calls to a local dev server you can install as follows.  

### 1. Start OneOps Dev Server:
```sh
 $ git clone git@github.com:GRT/oo-static-server.git
 $ cd oo-static-server
 $ npm i
 $ npm start
```
### 2. Build and serve Onesie:

```
 $ git clone git@github.com:GRT/onesie.git
 $ cd onesie
 $ npm i
 $ npm start
```
Navigate to [127.0.0.1:8080](http://127.0.0.1:8080/)

## Utility scripts
 - `npm run kill` kill webpack-dev-server process
 - `npm run clear` nuke node_modules and reinstall
 - `npm start` build and serve

## Notes
1. To generate package.json (which is already included in the project), run:
  - `npm init`


2. Install webpack both gloabally and locally within the project, run:
  - `npm install webpack --global`
  - `npm install webpack --save-dev`


3. Install babel loader, file loader and react, run:
  - `npm install babel-loader --save-dev`
  - `npm install react --save`
  - `npm install --save react-dom`
  - `npm install file-loader --save-dev`


4. Set up webpack dev server, run:
  - `npm install webpack-dev-server --global`
  - `npm install webpack-dev-server --save-dev`


5. Run the server (without build steps), run:
  - `npm run serve`
  - **NOTE:** `npm run serve` actually calls `webpack-dev-server --hot`. This is good for development purposes, but not for production.




### React Hot Loader

  > The React Hot Loader (RHL) is being used in this project. 
  >  RHL is a development tool that assists with maintaing state on the client while editing the source files. 
  > This is a very nice feature for client side development, because it removes browser refreshes, and *auto-magically* run build tasks in the background, which saves keystrokes and manual intervention
  
#### Useful RHL Links
  - [GitHub Project](https://github.com/gaearon/react-hot-loader)
  - [Project Site](http://gaearon.github.io/react-hot-loader/)
  - [Getting Started Guide](http://gaearon.github.io/react-hot-loader/getstarted/)
