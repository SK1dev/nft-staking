module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      "url": require.resolve("url/"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "http": require.resolve("stream-http"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "stream": require.resolve("stream-browserify"),
    }
    return config
}