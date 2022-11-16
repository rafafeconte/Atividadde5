const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber());
  return config;

}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://magento2.algolia.com/',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    experimentalStudio: true,
  },
  
});
