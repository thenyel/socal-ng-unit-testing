Unit Testing - Socal Angular Meetup
=========

-

## Installation
* Install yeoman angular generator - https://github.com/yeoman/generator-angular
* run `yo angular`
* (if you're getting errors) Install karma testing dependencies
    * `npm install --save karma-jasmine`
    * `npm install --save karma-chrome-launcher`
* Install jQuery
    * `bower install --save jquery`
    * add  `'app/bower_components/jquery/dist/jquery.js'` into karma.conf files: []
* #### Test watcher
    * in `karma.conf.js` set `autoWatch:true`
    * run `karma start`

### Creating files
* yeoman generators are available to create angular assets with included tests.
* for example:
    * `yo angular:factory` to create a blank factory with tests setup
    * `yo angular:directive` to create a blank directive with tests setup

