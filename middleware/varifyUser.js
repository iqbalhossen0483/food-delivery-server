const { getAuth } = require('firebase-admin/auth');
const initialization = require('../firebase/firebase.init');

initialization;

async function varifyUser(req, res, next) {
    const idToken = req.headers.authorize ?
        req.headers.authorize.split(" ")[1] :
        null;
    try {
        if (idToken) {
            getAuth()
                .verifyIdToken(idToken)
                .then(token => {
                    req.varifyEmail = token.email;
                    next();
                })
                .catch(err => {
                    next({ message: "Authentication failed" })
                });
        }
        else next({ message: "Authentication failed" });
    } catch (err) {
        next(err);
    }
}


module.exports = varifyUser;