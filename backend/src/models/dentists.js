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
      this.belongsTo(models.Users, {
        foreignKey: "dentists_created_by",
        as: "created",
      });

      // Users can update many featured dentist
      // but featured dentist can only have one user
      // One to Many
      this.belongsTo(models.Users, {
        foreignKey: "dentists_updated_by",
        as: "updated"
      });
    }
  }
  Dentists.init({
    dentists_id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    dentists_fname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter first name'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This contain featured dentist first name"
    },
    dentists_mname: {
      type : DataTypes.STRING,
      allowNull: true,
      comment: "This contain featured dentist middle name"
    },
    dentists_lname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter last name'},
        notEmpty:{ msg: 'This field is required'}
      },
      comment: "This contain featured dentist last name"
    },
    dentists_full_name :{
      type : DataTypes.STRING,
      set(value){
        this.setDataValue("dentists_full_name", 
        this.dentists_fname+ " "+ this.dentists_mname+ " "+ this.dentists_lname);
      },
    },
    dentists_specialty :{
      type : DataTypes.TEXT,
      allowNull : false,
      validate: {
        notNull:{msg: 'Please provide dentists specialty'},
        notEmpty:{ msg: 'This field is required'}
      },
      comment: "This contain featured dentist's specialty"
    },
    dentists_description :{
      type : DataTypes.TEXT,
      allowNull : false,
      validate: {
        notNull:{msg: 'Please provide description fo dentist'},
        notEmpty:{ msg: 'This field is required'}
      },
      comment: "This contain featured dentist's description to display on home page"
    },
    dentists_image :{
      type : DataTypes.STRING,
      allowNull: true,
      comment: "This will be the the featured dentist created"
    },
    dentists_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Active',
      comment: "This contain featured dentist's specialty"
      },
    // dentists_created_by: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.Users,
    //     key: "users_id",
    //   },
    // },
    // dentists_updated_by: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.Users,
    //     key: "users_id",
    //   },
    // },
    }, 

    {
      sequelize,
      timestamps: true,
      createdAt: "dentists_created_at",
      updatedAt: "dentists_updated_at",
      modelName: 'Dentists',
    });
  
    return Dentists;
};