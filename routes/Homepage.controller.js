const renderHomepage = async (req, res) => {
    res.render('homepage')
    console.log('i should be displaying the homepage')
};

const renderLogin = async (req, res) => {
    res.render('login')
    console.log('this is the login')
};

module.exports = {
    renderLogin,
    renderHomepage
};