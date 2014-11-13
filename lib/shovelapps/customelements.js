var fs = require("fs"),
  cheerio = require("cheerio");
exports = module.exports = {
  "name": "components",

  attach: function() {
    if (!this.templates) {
      throw new Error("templates module not loaded")
    }
    this.customElements = {};

    this.registerCustomElement = registerCustomElement;

    this.readCustomElementDefinitions = exports.readCustomElementDefinitions;
  },
  /**
   * Sets available custom elements registering them via app.registerCutomElement()
   */
  init: function(done) {
    var _this = this;

    done();
  },
  /**
   * Reads custom element definitions from `content`
   * @param {String} content - string with HTML and custom element definitions
   * @param {Function} callback
   *   - {Object} customElement - the reference to app.customElements
   */
  readCustomElementDefinitions: function(content, callback) {
    var _this = this,
      $ = cheerio.load(content),
      /*
       * Custom elements for a specific template are defined inside a
       * <script type="text/custom-elements"> tag.
       * Each custom element is a <custom-element></custom-element> with its
       * replacement HTML inside. i.e. $("custom-element").html()
       */
      $elementDefinitions = $("script[type='text/custom-elements']").each(function() {
        // text inside a <script> does not get parsed as element by cheerio nor jQuery
        var text = $(this).text(),
          $elements = $(text).filter("custom-element");
        $elements.each(function() {
          var tag = $(this).attr("name").trim(),
            template = $(this).html().trim();
          _this.registerCustomElement(tag, template);
        });
      });

    callback(null, this.customElements);

  }
};
/**
 * Add a custom element to this.customElements for the render to be able to replace it.
 * @param {String} tag. The custom element tag as will be used in the app content or template
 * @param {String} template. The custom element template that should be used to replace the tag.
 */
function registerCustomElement(tag, template) {
  this.customElements[tag] = template;
}