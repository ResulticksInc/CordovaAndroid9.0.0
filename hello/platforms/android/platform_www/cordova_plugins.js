cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "resulticks-cordova-plugin.ReCordovaPlugin",
      "file": "plugins/resulticks-cordova-plugin/www/ReCordovaPlugin.js",
      "pluginId": "resulticks-cordova-plugin",
      "clobbers": [
        "ReCordovaPlugin"
      ]
    },
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCM"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "resulticks-cordova-plugin": "2.0.5",
    "cordova-plugin-fcm-with-dependecy-updated": "7.8.0"
  };
});