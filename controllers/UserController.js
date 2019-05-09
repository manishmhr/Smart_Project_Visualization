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
    
}

function registeruser(req,res,next){
    usermodel.user.create({
        usermodel : req.body.uesrname,
        password: req.body.password,
        address : req.body.address
    })
}

module.exports = {
    registerUser
}