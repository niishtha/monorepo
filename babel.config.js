module.exports = function babelConfig(api) {
  api.cache(false);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      ['@babel/plugin-proposal-pipeline-operator', { "proposal": "minimal" }],
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-transform-runtime'
    ],
  }
}