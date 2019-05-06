var db = require('..configs/databaseconfig')

const User = sequelize.define('user', {
    // attributes
    
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
        
    }
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
    // options
    freezetableName: true,
    tableName: 'my_users'
});

User.sync({force:true})
.then(function (result) {
    console.log(result);
})

.catch(function (err) {
    console.log(err)
})
module.exports = {
    user
}