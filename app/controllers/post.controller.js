const db = require('../models');
const Post = db.post;

//Retrieves all posts
exports.allPosts = async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        if (!allPosts) {
            res.status(404).json({message: "Post records do not exist!"})
        }
        res.status(200).json({allPosts});
    } catch (e) {
	console.log(e);
        res.status(500).json({message: e});
    }
};

//Retrieves post by id
exports.onePost = async (req, res) => {
    try {
        const postId = req.params.postId;
	if (!postId) {
            res.status(400).json({message: "Invalid postId"});
	}
        const onePost = await Post.findByPk(postId);
	if (!onePost) {
            res.status(404).json({message: "Post record does not exist!"})
	}
        res.status(200).json({onePost});
    } catch (e) {
	console.log(e);
	res.status(500).json({message: e});
    }
};

//Retrieves posts by author
exports.authorPosts = async (req, res) => {
    try {
        const author = req.params.author;
	if (!author) {
            res.status(400).json({message: "Invalid author name"});
	}
        const allPosts = await Post.findAll({
	    attributes: {
		exclude: ['createdAt', 'id', 'author']
	    },
	    where: {author},
	    raw: true,
	});
	if (!allPosts) {
            res.status(404).json({message: "Author has no posts!"})
	}
        res.status(200).json({allPosts});
    } catch (e) {
	console.log(e);
	res.status(500).json({message: e});
    }
};

//POST new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

	const checkFields = [
            { fieldName: 'title', value: title },
            { fieldName: 'content', value: content },
            { fieldName: 'author', value: author }
        ];

        checkFields.forEach(({fieldName, value}) => {
            if (!value) {
                res.status(400).json({message: `Missing field ${value}!`});
            }
        });

        const newPost = await Post.create({
	    title, content, author
	});
        res.status(201).json(newPost);
    } catch (e) {
        res.status(500).json({message: e});
    }
};

//Update post
exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        if (!postId) {
            res.status(400).json({message: "Invalid postId"});
        }

        const { title, content, author } = req.body;

        const post = await Post.findByPk(postId);
	if (!post) {
            res.status(404).json({message: "Post record does not exist!"})
        }

        await post.update({
            title: title || post.title,
            content: content || post.content,
        });
        res.status(200).json(post);
    } catch (e) {
        res.status(500).json({message: e});
    }
};

//DELETE post
exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        if (!postId) {
            res.status(400).json({message: "Invalid postId"});
	}
        const post = await Post.findByPk(postId);
        if (!post) {
            res.status(404).json({message: "Post record does not exist!"})
        }
        await post.destroy();
	res.status(200).json({});
    } catch (e) {
        res.status(500).json({message: e});
    }
};
