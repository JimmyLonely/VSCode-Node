var util = require("util");

function Base(){
    var self = this;
    self.name='base';
    self.base = 1993;
    self.sayHello = function(){
        console.log(self.name + ' hello!');
    }
}

Base.prototype.proShowName = function(){
    var self = this;
    console.log(self.name);
};

function Sub(){
    var self = this;
    self.name='sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.sayHello();
console.dir(objBase);

var objSub = new Sub();

//objSub.sayHello();        //util.inherits inherits propotype attribute and function, only!

objSub.proShowName();
console.dir(objSub);