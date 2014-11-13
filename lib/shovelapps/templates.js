var cheerio = require("cheerio");

exports = module.exports = {
  "name": "templates",
  /**
   * Called when app.use();
   */
  attach: function(options) {

    // extensions to core object
    this.templates = true;
    this.parseTemplate = exports.parseTemplate;
    this.replacePluginTags = exports.replacePluginTags;
    this.replaceCustomElementTags = exports.replaceCustomElementTags;


  },
  /**
   * - Replaces custom elements in `content`
   * @param {String} content
   * @param {Function} called with the parsed content as argument
   *   - {Error} err - Null if nothing bad happended
   *   - {String} HTML content with the app's HTML5 compatible frontend;
   */
  parseTemplate: function(content, callback) {
    var _this = this;
    // Read element definitions present in app.html.
    _this.readCustomElementDefinitions(content, function(err, customElements) {
      _this.replaceCustomElementTags(content, customElements, function(err, htmlContent) {
        callback(err, htmlContent);
      });
    });
  },
  /**
   * Replaces custom elements in `content` for its equivalent in HTML5 compatible
   * according tu custom element definitions registered with app.registerCustomElement()
   * Using a jQuery compatible library (cheerio)
   * @param {String} HTML content using custom elements
   * @param {Object} Key/value with tag/replacementHTML
   * @param {Function}
   *   - {Error} err - Null if nothing bad happended
   *   - {String} HTML content with the custom elements replaced by replacement tags;
   */
  replaceCustomElementTags: function(content, customElements, callback) {
    var tags = Object.keys(customElements),
      $ = cheerio.load(content),
      $htmlContentTarget;
    tags.forEach(function(tag) {
      // For each custom element in the template...
      $(tag).each(function() {
        var attrs = $(this).attr();
        // save the current component html content
        var htmlContent = $(this).html(),
          template = customElements[tag],
          // create a new cheerio object based on component template
          $replacement;
        // If the custom element had innerhtml
        // store the original innerhtml in the new cheerio object
        if (htmlContent) {
          template = template.replace("{{content}}", htmlContent);
          // $htmlContentTarget = $replacement;
          // // or in its deepest child.
          // if ($htmlContentTarget.children().length) {
          //   while ($htmlContentTarget.children().length) {
          //     $htmlContentTarget = $htmlContentTarget.children();
          //   }
          // };
          // $htmlContentTarget.html(htmlContent);

        }
        $replacement = $(template);
        $replacement.attr(attrs);

        //replace the custom element with it's pure html representation
        $a = $(this).replaceWith($replacement);

      });
    });
    callback(null, $.html("html"));
  }
}