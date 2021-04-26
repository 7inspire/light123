module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      settings: {
        configPath: './config.js'
      }
    },
    // assert: {
    //   "preset": "lighthouse:recommended",
    // },
    upload: {
      // target: 'filesystem',
      "target": "lhci",
      "serverBaseUrl": "http://192.168.147.234:9001",
      token: '804bcd65-3c08-4488-9950-50a579420c6f'
    },
  },
};
