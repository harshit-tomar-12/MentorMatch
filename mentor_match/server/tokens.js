const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant,ChatGrant } = AccessToken;
const { v4: uuidv4 } = require("uuid");



const videoToken = (identity, room, config) => {
    const generateToken = config => {
        return new AccessToken(
          config.twilio.accountSid,
          config.twilio.apiKey,
          config.twilio.apiSecret,
          { identity: uuidv4() }
        );
      };
  let videoGrant;
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken(config);
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};
const chatToken = (identity, room, config) => {
    const generateToken = config => {
        return new AccessToken(
          config.twilio.accountSid,
          config.twilio.apiKey,
          config.twilio.apiSecret,
          { identity: uuidv4() }
        );
      };
  let chatGrant;
  if (typeof room !== 'undefined') {
    chatGrant = new ChatGrant({ room });
  } else {
    chatGrant = new ChatGrant();
  }
  const token = generateToken(config);
  token.addGrant(chatGrant);
  token.identity = identity;
  return token;
};

module.exports = { videoToken ,chatToken};