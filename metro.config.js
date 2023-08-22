const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'ttf', 'otf'], // Thêm các định dạng tệp hỗ trợ cho icon fonts
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
