require('dotenv').config();
const db = require('../models');
const User = db.user;

const authSecret = process.env.AUTH_SECRET_KEY;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 5),
        })
        res.status(200).json({message: "Registration was successful!"});
    } catch (e) {
	res.status(500).json({message: e.message});
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({where: {username: req.body.username}});

        if (!user) {
            return res.status(404).json({message: "User Not found."});
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({message: "Incorrect Password!"});
        }
        const token = jwt.sign({username: user.username }, authSecret, { expiresIn: 86400 });
        res.status(200).json({message: "Signin successful!", token: token});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
};
