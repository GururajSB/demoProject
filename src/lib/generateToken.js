const Token = require("../models/Token");
const JWT = require("./jwt");
module.exports = async function generateToken(user, client) {
  let accessTokenPayload = {
    tokenType: "AccessToken",
    type: "User",
    user: user._id,
  };
  //create a token
  let accessToken = await JWT.sign(accessTokenPayload);
  let refreshToken = await JWT.sign(
    { tokenType: "RefreshToken", type: "User", user: user._id },
    "1w"
  );
  await Token.create({
    token: refreshToken,
    client: client.id,
    payload: accessTokenPayload,
  });

  //send token back to user
  return { token: accessToken, refreshToken };
};
