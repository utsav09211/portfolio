module.exports = {
  siteMetadata: {
    title: `Utsav Sharma - Technical Specialist`,
    description: `Cade Kynaston is a software developer based in Salt Lake City, Utah. He is currently focused on using React and Gatsby to create extremely fast and responsive websites`,
    author: `@utsavsharma`,
    url: `https://utsavsharma.io`,
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
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-sass"
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1E2749`,
        theme_color: `#1E2749`,
        display: `minimal-ui`,
        icon: `src/images/ck-logo-light.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `500`, `600`]
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137604730-4"
      },
    },
  ],
}
