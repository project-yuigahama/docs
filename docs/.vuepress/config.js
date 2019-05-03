module.exports = {
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'Yuigahama,Discordbot,Discord,klasa,minecraft' }],
    ['meta', { name: 'author', content: 'ProjectYuigahama' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://project-yuigahama.github.io/docs' }],
    ['meta', { name: 'twitter:image', content: './wallpaper.jpg' }],
    ['meta', { name: 'twitter:creator', content: '@InkoHX' }],
    ['meta', { name: 'msapplication-TileColor', content: '#db7475' }],
    ['meta', { name: 'theme-color', content: '#db7475' }],
    ['meta', { property: 'og:title', content: 'ProjectYuigahama - Document' }],
    ['meta', { property: 'og:site_name', content: 'ProjectYuigahama - Document' }],
    ['meta', { property: 'og:url', content: 'https://project-yuigahama.github.io/docs' }],
    ['meta', { property: 'og:image', content: './wallpaper.jpg' }],
    ['meta', { property: 'og:type', content: 'site' }],
    ['link', { rel: 'icon', href: './icon.jpg' }]
  ],
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Yuigahama',
      description: 'Discordbot 「Yuigahama」 のドキュメントです。'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Yuigahama',
      description: 'Discordbot "Yuigahama" document.'
    }
  },
  themeConfig: {
    repo: 'project-yuigahama/docs',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHubでこのページを編集する。',
        lastUpdated: '最終更新日',
        nav: require('./lang/ja-JP').getNavbar(),
        sidebar: {
          
        }
      },
      '/en-US/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./lang/en-US').getNavbar(),
        sidebar: {
          
        }
      }
    }
  }
}