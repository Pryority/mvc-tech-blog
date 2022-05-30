const renderHomepage = async (req, res) => {
    res.render('home');
    console.log('this is the home page')
};

const renderMockPosts = async (req, res) => {

}

module.exports = {
    renderHomepage,
    renderMockPosts
};