const router = require('express').Router();
const postController = require('../Post.controller')

router.get('/', postController.getAllPosts)

router.post('/', postController.createPost)

router.get('/:id', postController.getPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;
