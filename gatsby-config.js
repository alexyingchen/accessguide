const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Access Guide`,
    description: `Access Guide is a simplified, illustrated version of WCAG 2.1 (web content accessibility guidelines).`,
    author: `@thetuttingtutor, @thatnewwen, @bernardwang`,
    menuLinks:[
      {
         name:'purchase',
         link:'/purchase'
      },
      {
         name:'glossary',
         link:'/glossary'
      },
      {
         name:'about',
         link:'/about'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Quicksand:400,700'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: "/accessguide"
};
