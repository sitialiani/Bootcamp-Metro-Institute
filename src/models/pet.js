'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsTo(models.Owner,{
        foreignKey: 'owner_id'
      })
      // define association here
    }
  }
  Pet.init({
    nama_pet: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
    tableName: 'pet'
  });
  return Pet;
};