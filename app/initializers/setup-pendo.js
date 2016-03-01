export function initialize(application) {
  var config = application.resolveRegistration('config:environment'),
      apiKey = config['ember-cli-pendo'] ? config['ember-cli-pendo'].apiKey : null;

  if(config.environment !== 'test' && apiKey) {
    window.pendo_options = {
     apiKey: apiKey,

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
  }
};

export default {
  name: 'setup-pendo',
  initialize: initialize
};

