  var fs = require("fs"),
    path = require("path");

  module.exports = {
    "name": "renderer", // Plugin's name

    // Called with plugin _options once plugin attached to application
    // `this` - is a reference to application
    "attach": function attach(_options) {
      this.renderToString = renderToString;
      this.readMainTemplateFile = readMainTemplateFile;
      this.renderAsset = renderAsset;
    },
    // Called when plugin detached from application
    // (Only if plugin with same name was attached)
    // `this` - is a reference to application
    "detach": function detach() {},

    // Called on application initialization
    // App#init(callback) will be called once every plugin will call `callback`
    // `this` - is a reference to application
    "init": function init(callback) {}

  };

  /**
   * Renders the template's app.html to a string passed as argument to `callback`
   * @param {Function} callback
   *   - {Error}. Null if nothing bad happened.
   *   - {String} content. Rendered HTML.
   */
  function renderToString(callback) {
    this.readMainTemplateFile(function(err, content) {
      callback(err, content);
    });

  }

  /**
   * Reads the template main fail (app.html) and passes its content to `callback`
   * @param {Function} callback. Called when the content is available (currently via fs.readFile)
   *   - {Err} err
   *   - {String} content. Render
   */
  function readMainTemplateFile(callback) {
    var _this = this,
      _path = path.join(this._options.templatesBaseDir,
        this._options.template, this._options.mainFile);
    fs.readFile(_path, function(err, content) {
      var content = content.toString();
      _this.parseTemplate(content, function(err, content) {
        callback(err, content);
      })
    });
  }

  /**
   * Reads an asset file contents
   * Used mainly by templates.js plugin
   * @param {Stirng} assetFilename - file name withouth path
   * @param {Function} callback - called on file load with content as argument
   *   - {Error} err. Null if nothing bad happened.
   *   - {String} content. Asset contents
   */
  function renderAsset(assetFilename, callback) {
    var _path = path.join(this._options.templatesBaseDir,
      this._options.template, this._options.assets, assetFilename);
    // TODO check if file exists
    // Ensure local path
    fs.readFile(_path, function(err, content) {
      callback(err, content);
    });
  }