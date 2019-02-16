module.exports = {
  siteMetadata: {
    title: `React CodeWorking`,
    description: `React CodeWorking is a monthly co-working event for React developers in Nashville.`,
    author: `@kwelch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Alegreya+Sans:800',
            'Montserrat+Subrayada:700',
            'Permanent+Marker',
            'Raleway:800',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
