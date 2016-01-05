/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pendo',
  isDevelopingAddon: function() {
    return false;
  },
  contentFor: function(type, config) {
    if (type === 'body') {
      return `<script>
        window.pendo_options = {
          apiKey: '${config['ember-cli-pendo'].apiKey}',

          // This is required to be able to load data client side
          usePendoAgentAPI: true
        };
      (function() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = ('https:' === document.location.protocol ? 'https://' : 'http://' ) + 'd3accju1t3mngt.cloudfront.net/js/pa.min.js';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      })();
          </script>`;
    }
  }
};
