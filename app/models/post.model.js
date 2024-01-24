module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
	title: {
	    type: Sequelize.STRING
	},
	content: {
	    type: Sequelize.TEXT
	},
	author: {
	    type: Sequelize.STRING
	}
    }, {
	updatedAt: 'timestamp',
    });
    return Post;
}
