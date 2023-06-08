const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
    },
  },
  env: {
    username: 'sretostage',
    password: 'sreto',
  },
   "video": false,
  viewportWidth: 1280,
  viewportHeight: 720,
  
});
