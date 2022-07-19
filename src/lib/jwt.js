const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;
module.exports = {
    verify: function (token) {
        return new Promise(function (resolve, reject) {
            jwt.verify(
                token,
                process.env.JWT_INTERNAL_SECRET || 'secret',
                { algorithm: process.env.JWT_ALGORITHM || 'HS256' },
                function (err, payload) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(payload);
                    }
                });
        });
    },
    decode: function (token) {
        return new Promise(function (resolve, reject) {
            jwt.decode(token, function (err, payload) {
                if (err) {
                    reject(err);
                } else {
                    resolve(payload);
                }
            });
        });
    },
    sign: function (payload, time = "5m") {
        return new Promise(function (resolve, reject) {
            jwt.sign(payload,
                process.env.JWT_EXTERNAL_SECRET || 'secret',
                { algorithm: process.env.JWT_ALGORITHM || 'HS256', expiresIn: time, issuer: "demo", audience: "demo", jwtid: uuid() }, function (err, token) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(token);
                    }
                });
        });
    }
}