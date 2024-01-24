const express = require('express')
const router  = express.Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/post.controller");


router.get('/posts', [authJwt.verifyToken], controller.allPosts);
router.get('/post/:postId', [authJwt.verifyToken], controller.onePost);
router.get('/post/:author', [authJwt.verifyToken], controller.authorPosts);
router.post('/post', [authJwt.verifyToken], controller.createPost);
router.put('/post/:postId', [authJwt.verifyToken], controller.updatePost);
router.delete('/post/:postId', [authJwt.verifyToken], controller.deletePost);


module.exports = router;
