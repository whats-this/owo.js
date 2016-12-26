const HOST = 'https://api.awau.moe';

module.exports = {
  shorten: (key, url) => `${HOST}/shorten/polr?action=shorten&url=${url}&key=${key}`,
  upload: key => `${HOST}/upload/pomf?key=${key}`
};
