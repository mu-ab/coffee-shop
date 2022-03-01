module.exports = {
  siteMetadata: {
    title: "The Coffee Blog",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
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
