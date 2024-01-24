require('dotenv').config();

const authSecret = process.env.AUTH_SECRET_KEY;
const jwt = require("jsonwebtoken");

verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).send({message: "Please provide token!"});
    }
    jwt.verify(token, authSecret, (err, user) => {
        console.log(err);
        if (err) {
            console.log(err);
            return res.status(401).send({message: "Unauthorized!"});
        }
        req.user = user;
        next();
    });
};

const authJwt = { verifyToken };

module.exports = authJwt;
