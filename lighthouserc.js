module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
    },
    upload: {
      // target: 'filesystem',
      "target": "lhci",
      "serverBaseUrl": "http://192.168.147.234:9001"
    },
  },
};
