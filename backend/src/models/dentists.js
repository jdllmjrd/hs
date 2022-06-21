'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dentists.init({
    id: {
      type : DataTypes.UUID,
      field: 'dentists_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    dentists_number: {
      type : DataTypes.STRING,
    },
    dentists_fname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter first name'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    dentists_mname: {
      type : DataTypes.STRING,
      allowNull: true,
    },
    dentists_lname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter last name'},
        notEmpty:{ msg: 'This field is required'}
      }
    },
    dentists_full_name :{
      type : DataTypes.STRING,
      set(value){
        this.setDataValue("full_name", 
        this.dentists_fname+ " "+ this.dentists_mname+ " "+ this.dentists_lname);
      },
    },
    dentists_specialty :{
      type : DataTypes.TEXT,
      allowNull : false,
      validate: {
        notNull:{msg: 'Please provide dentists specialty'},
        notEmpty:{ msg: 'This field is required'}
      }
    },
    dentists_description :{
      type : DataTypes.TEXT,
      allowNull : false,
      validate: {
        notNull:{msg: 'Please provide description fo dentist'},
        notEmpty:{ msg: 'This field is required'}
      }
    },
    dentists_image :{
      type : DataTypes.STRING,
      allowNull: false,
    },
    dentists_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Active'
      },
    }, 
    {
      sequelize,
      timestamp: true,
      createdAt: "dentists_created_at",
      updatedAt: "dentists_updated_at",
      modelName: 'Dentists',
    });
  return Dentists;
};