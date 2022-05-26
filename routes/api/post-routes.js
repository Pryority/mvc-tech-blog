const router = require('express').Router();
const postController = require('../../controller/postController')

router.route('/')
    .get(postController.getAllPosts)
    .post(postController.createPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

router.route('/:id')
    .get(postController.getPost)

module.exports = router;