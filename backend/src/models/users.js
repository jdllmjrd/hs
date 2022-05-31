'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type : DataTypes.UUID,
      field: 'users_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4 // Or DataTypes.UUIDV1
    },
  }, 
  
  
  {
    sequelize,
    timestamp: true,
    createdAt: "users_created_at",
    updatedAt: "users_updated_at",
    modelName: 'Users',
  });

  return Users;
};