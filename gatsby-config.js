module.exports = {
  siteMetadata: {
    title: 'onut',
    description: 'Our art is based on human emotions, universal and open. An invitation to reflection and dialogue. Celebrating diversity of opinions. In seek of constant evolution. A reflection on how we could make this world better',
    keywords: 'onut, computational art, art, human emotions',
    menuLinks: [
      {
        name: 'manifesto',
        link: '/manifesto'
      },
      {
        name: 'experiments',
        link: '/experiments'
      },
      {
        name: 'contact',
        link: 'mailto:hello@onut.art'
      },
      {
        name: 'work',
        link: '/work'
      },
      {
        name: 'home',
        link: '/'
      }
    ]
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-125510208-1',
      head: false
    },
  }
  ],
}