module.exports = {
  siteMetadata: {
    title: `Scuffletown Garden`,
    description: ``,
    author: `Cezar Carvalhaes`,
  },
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
  ],
}
