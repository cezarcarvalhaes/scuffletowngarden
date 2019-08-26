const path = require('path');

let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Scuffletown Garden`,
    description: ``,
    author: `Cezar Carvalhaes`,
  },
  pathPrefix: "/scuffletowngarden",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scuffletown Garden`,
        short_name: `Scuffletown Garden`,
        start_url: `/`,
        background_color: `#2b463e`,
        theme_color: `#2b463e`,
        display: `minimal-ui`,
        icon: `src/images/sg-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1W7JMx_N41_9YXNldcW0JH2YCR4wK4vAIZlCaAMeS5TQ',
          worksheetTitle: 'Dinner',
          // eslint-disable-next-line global-require
          credentials: require('./client-secret.json'),
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1W7JMx_N41_9YXNldcW0JH2YCR4wK4vAIZlCaAMeS5TQ',
          worksheetTitle: 'Lunch',
          // eslint-disable-next-line global-require
          credentials: require('./client-secret.json'),
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1W7JMx_N41_9YXNldcW0JH2YCR4wK4vAIZlCaAMeS5TQ',
          worksheetTitle: 'Brunch',
          // eslint-disable-next-line global-require
          credentials: require('./client-secret.json'),
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1W7JMx_N41_9YXNldcW0JH2YCR4wK4vAIZlCaAMeS5TQ',
          worksheetTitle: 'Cocktails',
          // eslint-disable-next-line global-require
          credentials: require('./client-secret.json'),
      },
    },
  ],
}
