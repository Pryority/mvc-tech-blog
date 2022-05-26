const { Post } = require('../model');

const getPost = (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'body',
            'type',
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

const getAllPosts = (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'id',
            'title',
            'body',
            'type',
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        // include: [
        //     {
        //         model: Comment,
        //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //         include: {
        //             model: User,
        //             attributes: ['username']
        //         }
        //     },
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

const createPost = (req, res) => {
    // TODO: Add session
    if (req.session) {
        Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id
        })
            .then(dbPostData => res.json(dbPostData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}

const updatePost = (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

const deletePost = (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbpostData => {
            if (!dbpostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbpostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}