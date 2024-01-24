const mysqlConfig = require("../config/db.config.js");

const User = require("../models/user.model.js");
const Post = require("../models/post.model.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    mysqlConfig.DB,
    mysqlConfig.USER,
    mysqlConfig.PASSWORD,
    {
        host: mysqlConfig.HOST,
        dialect: mysqlConfig.dialect,
        pool: {
            max: mysqlConfig.pool.max,
            min: mysqlConfig.pool.min,
            acquire: mysqlConfig.pool.acquire,
            idle: mysqlConfig.pool.idle
        }
    }

);

const db = {Sequelize: Sequelize, sequelize: sequelize};

db.user = User(sequelize, Sequelize);
db.post = Post(sequelize, Sequelize);

//1 user - many blogposts
db.user.hasMany(db.post);
db.post.belongsTo(db.user);

module.exports = db;
