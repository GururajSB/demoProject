const jwt = require('./jwt');
module.exports = async function getTokenMetadata(token) {
    try {
        return await jwt.verify(token);
    }
    catch (e) {
        console.log(e)
        return {};
    }
}