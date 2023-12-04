const formLogin = (req, res) => {
    res.render('auth/login', {
        authenticated: false,
    });
};

export { formLogin };
