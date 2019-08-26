module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
      }
    ]
  });
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: [
      "style-loader", // creates style nodes from JS strings
      "css-loader", // translates CSS into CommonJS
      "sass-loader" // compiles Sass to CSS, using Node Sass by default
    ]
  });
  // config.module.rules.push({
  //   test: /\.(css)$/,
  //   use: [
  //     "style-loader", // creates style nodes from JS strings
  //     "css-loader" // translates CSS into CommonJS
  //   ]
  // });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
