const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '91195154',{
    host: 'localhost',
    dialect:'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
}catch(error){
    console.log(`não foi possível conectar: ${erro}`)
}

module.exports = sequelize