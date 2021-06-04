module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      settings: {
        // configPath: './config.js',
        chromeFlags: "--disable-gpu --no-sandbox",
        onlyCategories: ['performance'],
        locale: 'zh',
        maxWaitForFcp: 15 * 1000,
        maxWaitForLoad: 35 * 1000,
        skipAudits: ['uses-http2']
      }
    },
    // assert: {
    //   "preset": "lighthouse:recommended",
    // },
    upload: {
      // target: 'temporary-public-storage',
      // target: 'filesystem',
      "target": "lhci",
      "serverBaseUrl": "http://127.0.0.1:9001",
      token: '6b0f4ea1-a6a4-438c-83c1-56d5041c6340'
    },
  },
};
