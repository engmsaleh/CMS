var util = require("util"),
  path = require("path"),
  broadway = require("broadway");


exports = module.exports = App;

function App(options) {
  var self = this;
  App.super_.call(this);
  // set this.server to the express instance passed as option.
  this.server = options.server;
  this.useCorePlugins();

};

// Let's inherit from broadway (https://github.com/flatiron/broadway) right now for taking advance
// of the plugins interface.
util.inherits(App, broadway.App);

App.prototype._options = {
  templatesBaseDir: "./templates",
  template: "starter",
  assets: "assets",
  mainFile: "app.html",
  pluginsPath: path.join(".", "plugins")
};

App.prototype.useCorePlugins = function() {
  this.use(require("./templates"));
  this.use(require("./customelements"));
  this.use(require("./panelserver"));
  this.use(require("./adminpanelserver"));
  this.use(require("./plugins"));
  this.use(require("./renderer"));
};