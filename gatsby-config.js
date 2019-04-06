require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `CodeWorking`,
    description: `CodeWorking engineering better solutions and leveling up the community.`,
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
      resolve: 'gatsby-plugin-source-eventbrite',
      options: {
        query: {
          'organizer.id': '15672387101',
          expand: ['venue'],
        },
        token: process.env.EVENTBRITE_ACCESS_TOKEN,
      },
    },
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
