// next.config.js

const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

// module.exports = withFonts();


// module.exports = withSass({
//   /* config options here */
// })


// const nextConfig = {
//     exportTrailingSlash: true
// }

module.exports = withPlugins([withCSS(), withSass({}), withFonts()], {});