const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://next.privat24.ua',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});