module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    author: 'Jefferson Daniel',
    title: `Jefferson Daniel - Blog`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-prismjs'
        ]
      }
      
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp'
  ],
}
