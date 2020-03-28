module.exports = {
  siteMetadata: {
    mainColor: "#3c81fa",
    secondColor: "#2f4858",
    slogan: "Make people know about you with us",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officia perspiciatis quidem, adipisci aperiam ratione sunt
    at ducimus consequatur qui, cumque velit iure ex ad 
    perferendis repellendus minus blanditiis quas. Voluptatibus.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
  ],
}
