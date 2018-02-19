var inherits = require('inherits');

var Bar = require('./bar').Bar;


function Foo(a, b, config) {
  Bar.prototype.call(this, a, b, config.c);

  this.foo = this.foo.bind(this);
}

inherits(Foo, Bar);


Foo.prototype.foo = function(d) {

  var blub = Blub.blub.apply(Blub, d);

  return Object.assign({}, this.bar, {
    blub: blub,
    d: d
  });
};

Foo.prototype.longArgFn = function(
    hello, world,
    wowo, wooooooooorld) {

};