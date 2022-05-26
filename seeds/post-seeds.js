const { Post } = require('../model')

const postData = [
    {
        "id": 1,
        "title": "The FIRST ARTICLE!!",
        "user_id": 1,
        "updatedAt": "2022-05-26T20:17:13.787Z",
        "createdAt": "2022-05-26T20:17:13.787Z"
    },
    {
        "id": 2,
        "title": "The FIRST BLOG!!",
        "user_id": 1,
        "updatedAt": "2022-05-27T20:17:00.787Z",
        "createdAt": "2022-05-27T20:17:00.787Z"
    },
    {
        "id": 3,
        "title": "The SECOND BLOG!!",
        "user_id": 2,
        "updatedAt": "2022-06-26T20:17:13.787Z",
        "createdAt": "2022-06-26T20:17:13.787Z"
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
