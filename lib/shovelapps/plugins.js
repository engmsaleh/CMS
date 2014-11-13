var fs = require("fs"),
  path = require("path"),
  async = require("async");

module.exports = {
  "name": "plugins",
  attach: function() {

    /**
     * Loads every plugin
     * from the plugins folder.
     * We're using broadway plugin mechanism
     * (https://github.com/flatiron/broadway)
     * @param {Function} callback
     *   - {array} plugins - Declared name of every plugin that was loaded
     */
    this.loadPlugins = loadPlugins.bind(this);
    this.usePlugin = usePlugin.bind(this);
    this.loadPlugins(function(pluginNames) {

    });
  },
  "init": function(done) {}
}

function loadPlugins(callback) {
  var _this = this,
    pluginsNames;
  pluginNames = fs.readdirSync(_this._options.pluginsPath).filter(function(file) {
    return fs.statSync(path.join(_this._options.pluginsPath, file)).isDirectory();
  });
  async.each(pluginNames, function(pluginName, asyncCallback) {
      _this.usePlugin(pluginName);
      asyncCallback(null);
    },
    function() {
      callback(_this.plugins)
    });
};

function usePlugin(pluginName) {
  var app = this;
  var _path = path.join(process.cwd(), "plugins", pluginName),
    pluginEntryPoint = pluginName + ".js";
  app.use(require(path.join(_path, pluginEntryPoint)));

}