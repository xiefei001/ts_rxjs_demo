"use strict";
var rxjs_1 = require('rxjs');
require('rxjs/add/operator/map');
rxjs_1.Observable.of(1, 2, 3).forEach(function (x) { return console.log(x + '!!!'); });
console.log();
var x = 10;
var y = 'abc';
console.log(x + " has value 10 " + y);
