const User = require("../models/user");

// module.exports.renderRegister = (req, res) => {
//     res.render("user/register");
// };

// module.exports.register = async (req, res) => {
//     try {
//         const { email, username, password } = req.body;
//         const user = new User({ email, username });
//         const registeredUser = await User.register(user, password);
//         req.login(registeredUser, function (err) {
//             if (err) return next(err);
//             req.flash("success", "Welcome to Yelp Camp");
//             res.redirect("/");
//         });
//     } catch (error) {
//         req.flash("error", error.message);
//         res.redirect("/register");
//     }
// };

// module.exports.renderLogin = (req, res) => {
//     res.render("user/login");
// };

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back!");
    const redirectUrl = res.locals.returnTo || "/";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash("success", "Sayonara! Mate ne");
        res.redirect("/");
    });
};
