var path = require("path"),
  express = require("express");;

module.exports = {

  attach: function(options) {
    var app = this;

    // Set GET route for app frontend
    app.server.get("/", function(req, res) {
      app.renderToString(function(err, content) {
        res.send(content);
      });
    });
    // Set GET route for app asset files. Static
    var assetsPath = path.join(process.cwd(), app._options.templatesBaseDir,
      app._options.template, app._options.assets);
    app.server.use("/assets", express.static(assetsPath));
  }

}