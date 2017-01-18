var util = require('util');

function Person(){
    var self = this;
    self.name = 'jimmy';
    self.sayHello = function(){
        console.log(self.name + ' Hello!');
    }
}

var objPerson = new Person();

console.log(util.inspect(objPerson, true, 1));

console.log(util.inspect(objPerson, true, null, true));