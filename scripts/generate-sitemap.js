const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
  baseUrl: 'https://old.ft9ja.com/',
  pagesDirectory: path.resolve(__dirname, '../src/pages/'),
  targetDirectory: path.resolve(__dirname, '../public/'),
  ignoredExtensions: [
    'js',
    'map',
    'json',
    'xml',
    'png',
    'css',
    'jpeg',
    'jpg',
    'icon',
  ],
  ignoredPaths: ['404', 'favicon', 'index', 'articles'],
  generateRobotsTxt: true,
})
