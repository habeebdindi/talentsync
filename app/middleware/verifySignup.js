const db = require("../models");
const User = db.user;

duplicateCredentials = async (req, res, next) => {
    try {
        let user = await User.findOne({where: {username: req.body.username}});

	if (user) {
            return res.status(400).send({message: "This username has been taken!"});
        }
        user = await User.findOne({where: {email: req.body.email}});
        if (user) {
            return res.status(400).send({message: "This email has been chosen!"});
        }
        next();
    } catch (e) {
        return res.status(500).send({message: "Validation error!"});
    }
};

const verifySignUp = { duplicateCredentials };

module.exports = verifySignUp;
