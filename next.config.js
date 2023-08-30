module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'video',
          },
        },
      ],
    })

    return config
  },
}

const withVideos = require('next-videos')

module.exports = withVideos()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
  },
  swcMinify: true,
  experimental: {
    // newNextLinkBehavior: true,
    // scrollRestoration: true,
  },
  images:{
    domains:["ft9japayoutbucket.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
