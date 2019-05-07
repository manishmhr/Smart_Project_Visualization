var db = require('../configs/dbconfigs')

const User = db.sequelize.define('user', {
        // attributes
        id:{
            type:db.Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },

        firstName: {
            type: db.Sequelize.STRING,
            allowNull: false
        },

        lastName: {
            type: db.Sequelize.STRING
            allowNull: false
        }
    },

    {
        // options

        freezeTableName:true,
        tableName:'my_users'
    });


User.sync({force:false})
    .then(function(result)

    {


// console.log(result);

    })
    .catch(function(err){
        console.log(err)
    })


module.exports = {
    User
}


// password: {
//    type: db.Sequelize.STRING,
//    allowNull: false
//  },