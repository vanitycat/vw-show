var $ = require('jquery');
var Person = require('./modules/Person');

alert("this is yet another test");

var john = new Person("john doe", "black");
john.greet();

var jane = new Person("Jane smith", "red");
jane.greet();
