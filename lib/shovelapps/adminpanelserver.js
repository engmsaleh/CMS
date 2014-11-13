var path = require("path"),
  express = require("express");;

module.exports = {
  /**
   * Called when app.use();
   */
  attach: function(options) {
    var app = this;
    // Set GET route for app's admin panel interface. Static
    app.server.use("/admin", express.static(path.join(process.cwd(), "/admin")));

    // Register some elements regarding access the admin panel
    app.registerCustomElement("admin-links-content-block", '<content-block><content-block-inner><p>You can access the <a href="/admin" class="external item-link">Admin panel</a> to start configuring this app.</p></content-block-inner></content-block>');
    app.registerCustomElement("admin-links-divider", '<li class="item-divider">App administration</li>');
    app.registerCustomElement("admin-panel-link", '<li><a href="/admin" class="close-panel external item-link"><item-content><item-title>Admin panel</item-title></item-content></a></li>');
  }

}