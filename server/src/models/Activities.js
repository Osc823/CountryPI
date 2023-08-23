const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        // Puede tener valores como '1', '2', '3', '4' o '5'.
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false 
    },
    duration: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6','7','8', '9', '10', '11', '12'),
        allowNull: false 
    },
    season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: false // Decimos que siempre necesitamos decir en qué temporada encaja la actividad.
    }
    },{timestamps: false}
    )
}