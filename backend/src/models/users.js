'use strict';
const {
  Model
} = require('sequelize');

const PROTECTED_ATTRIBUTES = ["users_password", "users_birthdate"];

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Only the admin can create a user account; thus,
      // An Admin can add many user account
      // But a user account can only added by one admin
      // One to Many, This is fix because admin-user only have 
      // the power to add/update user. 
      this.belongsTo(Users, {
        foreignKey: "users_created_by",
      });
      this.belongsTo(Users, {
        foreignKey: "users_updated_by",
      });
      // Association to Use_counter
      // One to One
      this.hasOne(models.Users_counter);

      // Association to Branches by staff
      // this.belongsTo(models.Branches, {
      //   foreignKey: "users_branches",
      // });
    }

    // This part will protect some attributes
    toJSON(){
      const attributes = {...this.get()};

      for(const a of PROTECTED_ATTRIBUTES){
        delete attributes[a];
      }
      return attributes;
    }
  }

  
  Users.init({
    id: {
      type : DataTypes.UUID,
      field: 'users_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4,
      comment: "This will cbe the ID for users"
    },
    users_fname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter your first name'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This will be the users' first name",
    },
    users_mname: {
      type : DataTypes.STRING,
      allowNull: true,
      comment: "This will be the middle name",
    },
    users_lname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter your last name'},
        notEmpty:{ msg: 'This field is required'}
      },
      comment: "This will contain the users last name",
    },
    users_full_name :{
      type : DataTypes.STRING,
      set(value){
        this.setDataValue("users_full_name", 
        this.users_fname+ " "+ this.users_mname+ " "+ this.users_lname);
      },
      comment: "This will be the full name part",
    },
    users_birthdate: {
      type      : DataTypes.DATEONLY,
      allowNull : false,
      validate  : {
        notNull :{msg: 'Please enter your birth date'},
        notEmpty:{msg: 'This field is required' }
      },
      comment: "This will be the birth date column",
    },
    users_gender :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isIn :{
          args :[["Male", "Female", "Other", "Prefer not to say"]], 
          msg : "Gender should be Male, Female, Other, Prefer not to say",
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This will be the gender column for the users",
    },
    users_civil_status :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isIn :{
          args :[["Single", "Married", "Divorced", "Widowed"]], // for dropdown
          msg : "Civil status should be Single, Married, Divorce, or Widowed"
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'},
      },
      comment: "This will contain the civil status of the users",
    },
    users_phone_number : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "You must enter Phone Number" },
        len: { args: [11,11], msg: 'Phone Number is invalid should be 11 numbers' },
        isInt: { args: true, msg: "You must enter Phone Number" },
      },
      comment: "This will contain hashed password",
    },
    users_email :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isEmail : {args: true, msg: "Please enter a valid email"},
        notNull: { args: true, msg: "You must enter a valid email" },
      },
      unique : "email",
      comment: "This will contain the unique email of the users",
    },
    users_password :{
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull: { args: true, msg: "You must enter password" },
        len: { args: [8,60], msg: 'Password should atleast have 8 characters' },
     },
     comment: "This will contain hashed password",
    },
    users_type :{
      type : DataTypes.STRING,
      allowNull : true,
      defaultValue : 'Patient',
      validate: {
        isIn :{
          args :[["Admin", "Staff", "Dentist", "Patient"]], // for dropdown
        },
      },
      comment: "This will identify what type of user is",
    },
    users_profile_pic :{
      type : DataTypes.STRING,
      allowNull: true,
      comment: "This will put be where profile pic will save",
    },
    users_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Active',
      validate: {
        isIn :{
          args :[["Active", "Deactivated"]], 
        },
    },
    comment: "This contains if the user is deactivated or not",
    },
    // // This is for staff only
    // users_branches: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.Branches,
    //     key: "branches_id",
    //   },
    // },
    users_created_by: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: "users_id",
    },
  },
    users_updated_by: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: "users_id",
    },
  },
},

  {
    sequelize,
    timestamps: true,
    createdAt: "users_created_at",
    updatedAt: "users_updated_at",
    modelName: 'Users',

    // Ask QUESTION NA
    hooks: {
      afterCreate : (user, options) => {
        models.Users_counter.create({
          UserId: user.users_id
        })
      },
    },
    
  });

  return Users;
};