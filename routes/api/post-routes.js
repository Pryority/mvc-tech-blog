const router = require('express').Router();
const postController = require('../../controller/postController')

router.route('/')
    .get(postController.getAllPosts)
    .post(postController.createPost)

router.route('/:id')
    .get(postController.getPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

module.exports = router;