const router = require('express').Router();

const { Post, User, UserPost } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'body',
            'user_id',
        ],
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'body', 'user_id', 'created_at'],
                include: {
                    model: UserPost,
                    attributes: ['user_id']
                }
            },
        ],
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => {
                pizza.get({
                    plain: true,
                })
            });

            res.render('home', posts)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.use('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'body',
            'user_id',
        ],
        include: [
            { model: User, attributes: ['username'] }
        ]
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
});

module.exports = router;