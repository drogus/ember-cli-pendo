# Ember-cli-pendo

Add pendo to your application.

## Installation

`ember install Ember-cli-pendo`

## Usage

Configure your pendo api key in environment.js
```javascript
// environment.js
ENV['ember-cli-pendo'] = {
  apiKey: 'abc-123'
};
```

The pendo javascript api is now avaliable globally at window.pendo

For example,
```javascript
window.pendo.identify(options);
```
