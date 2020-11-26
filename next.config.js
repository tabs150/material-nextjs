const optimizedImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const cssConfig = {
  
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[name]___[hash:base64:5]'
  }
};

const optimizedImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75
  }
};

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    );
    return config;
  },
};

module.exports = withPlugins([
  [withCss, cssConfig],
  [withSass, sassConfig],
  [optimizedImages, optimizedImagesConfig],
], nextConfiguration);