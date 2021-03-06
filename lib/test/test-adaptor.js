"use strict";

var Adaptor = require("../adaptor"),
    Utils = require("../utils");

var TestAdaptor = module.exports = function TestAdaptor() {
  TestAdaptor.__super__.constructor.apply(this, arguments);
};

Utils.subclass(TestAdaptor, Adaptor);


TestAdaptor.prototype.connect = function(callback) {
  callback();
};

TestAdaptor.prototype.disconnect = function(callback) {
  callback();
};

TestAdaptor.adaptors = ["test"];
TestAdaptor.adaptor = function(opts) { return new TestAdaptor(opts); };
