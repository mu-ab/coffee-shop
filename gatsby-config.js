module.exports = {
  siteMetadata: {
    title: "The Coffee Blog",
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "Index page Images",
        path: `${__dirname}/src/pageData`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "global images",
        path: `${__dirname}/static/img`,
      },
    },
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "src/blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pageData",
        path: "src/pageData",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
