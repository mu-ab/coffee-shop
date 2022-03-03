module.exports = {
  siteMetadata: {
    title: "The Coffee Blog",
  },
  plugins: [
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
    "gatsby-transformer-remark",
  ],
}
