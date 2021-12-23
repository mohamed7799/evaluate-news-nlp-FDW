const validUrl = require("valid-url");

const checkURL = (url) => {
  return validUrl.isUri(url);
};

module.exports = checkURL;
