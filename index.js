/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pendo',
  isDevelopingAddon: function() {
    return false;
  },
  contentFor: function(type, config) {
    var apiKey = config['ember-cli-pendo'] ? config['ember-cli-pendo'].apiKey : null;

    if (type === 'head' && config.environment !== 'test' && apiKey) {
      return "<script>\n" +
        "window.pendo_options = {\n" +
        "  apiKey: '" + apiKey + "',\n" +
        "  // This is required to be able to load data client side\n" +
        "  usePendoAgentAPI: true\n" +
        "};\n" +
        "(function() {\n" +
        "  var script = document.createElement('script');\n" +
        "  script.type = 'text/javascript';\n" +
        "  script.async = true;\n" +
        "  script.src = ('https:' === document.location.protocol ? 'https://' : 'http://' ) + 'd3accju1t3mngt.cloudfront.net/js/pa.min.js';\n" +
        "  var firstScript = document.getElementsByTagName('script')[0];\n" +
        "  firstScript.parentNode.insertBefore(script, firstScript);\n" +
        "})();\n" +
        "</script>\n";
    }
  }
};
