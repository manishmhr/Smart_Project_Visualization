var usermodel = require('../models/UserModel');

function registeruser () {
    usermodel.User.create(
        {
            username: 'Manish',
            password: 'manish',
            email: 'manishmhr2@gmail.com'
        })
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.log(err);

        })
}
//registerUser();