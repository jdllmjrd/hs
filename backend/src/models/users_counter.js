'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users_counter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // this.belongsTo(models.Users, {
      //   foreignKey: "users_counter",
      // });
    }
  }

  Users_counter.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      field: 'users_counter_id',
      primaryKey : true,
      comment: "This will cbe the ID for users"
    },
    users_counter: {
      type : DataTypes.UUID,
      allowNull: true,
      comment: "This will be the foreign key for association",
    },
 },

  {
    sequelize,
    timestamps: false,
    modelName: 'Users_counter',
  });

  return Users_counter;
};