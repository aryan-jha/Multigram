module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@data': './src/data/',
          '@ui': './src/ui',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
