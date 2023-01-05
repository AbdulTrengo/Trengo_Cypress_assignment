const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.trengo.eu',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
