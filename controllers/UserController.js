var usermodel = require('../models/UserModels');


function registerUser(){
    usermodel.User.create({

        firstName : 'Manish',

        lastName:'Maharjan',

    })

        .then(function(result){
            // console.log(result);
        })
        .catch(function(err)
        {
            console.log(err);
        })

//password : 'anu',
}

module.exports = {
    registerUser
}