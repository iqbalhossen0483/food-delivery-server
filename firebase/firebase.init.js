const admin = require('firebase-admin/app');
require("dotenv").config();


const serviceAccount = require("../firebase_keys/firebase-private-keys.json");

const initialization = admin.initializeApp({
    credential: admin.cert(serviceAccount),
    databaseURL: `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.wewoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
});

module.exports = initialization;
