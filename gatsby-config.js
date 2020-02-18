module.exports = {
  siteMetadata: {
    title: "Andrew Hummel Profile",
    description:
      "A starter kit for TypeScript-based Gatsby projects with sensible defaults.",
    keywords: "gatsbyjs, gatsby, javascript, sample, something",
    siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
    iconUrl: "https://fonts.googleapis.com/icon?family=Material+Icons",
    author: {
      name: "Andrew W. Hummel",
      url: "https://github.com/ahummel25",
      email: "ahummel25@gmail.com"
    }
  },
  pathPrefix: "/profile",
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Andrew Hummel Profile",
        short_name: "Profile",
        start_url: "/profile/",
        background_color: "#285171",
        theme_color: "#285171",
        display: "standalone",
        icon: `${__dirname}/src/images/favicon-32x32.png`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-starter-typescript-plus.netlify.com"
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet"
  ]
};
