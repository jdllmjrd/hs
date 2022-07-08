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
      this.belongsTo(Users, {
        foreignKey: "users_created_by",
        as: "created"
      });
      this.belongsTo(Users, {
        foreignKey: "users_updated_by",
        as: "updated"
      });
       // users - service created
       this.hasMany(models.Services, {
        foreignKey: "services_created_by",
        as: "admin_added_service"
      });
      // users - service updated
      this.hasMany(models.Services, {
        foreignKey: "services_updated_by",
        as: "admin_updated_service"
      });
       // users - branch created
       this.hasMany(models.Branches, {
        foreignKey: "branches_created_by",
        as: "added_branch"
      });
      // users - branch updated
      this.hasMany(models.Branches, {
        foreignKey: "branches_updated_by",
        as: "updated_branch"
      });
      // users - Dentist created
      this.hasMany(models.Dentists, {
        foreignKey: "dentists_created_by",
        as: "admin_added_dentist"
      });
      // users - Dentist updated
      this.hasMany(models.Dentists, {
        foreignKey: "dentists_updated_by",
        as: "admin_updated_dentist"
      });
      //One to Many -- Dentist Sched to users_dentist
      this.hasMany(models.Dentists_schedules,{
        foreignKey: "schedule_dentist",
        as: "dentist_sched"
      });
      this.hasMany(models.Dentists_schedules,{
        foreignKey: "schedule_created_by",
        as: "sched_created"
      });
      this.hasMany(models.Dentists_schedules,{
        foreignKey: "schedule_updated_by",
        as: "sched_updated"
      });

      // Appointments
      this.hasMany(models.Appointments,{
        foreignKey: "appointments_created_by",
        as: "app_created"
      });
      this.hasMany(models.Appointments,{
        foreignKey: "appointments_updated_by",
        as: "app_updated"
      });

      // INVOICE
      this.hasMany(models.Invoices,{
        foreignKey: "invoices_created_by",
        as: "invoice_created"
      });
      this.hasMany(models.Invoices,{
        foreignKey: "invoices_updated_by",
        as: "invoice_updated"
      });
      // Appointments table
      this.hasMany(models.Appointments,{
        foreignKey: "appointments_created_by",
        as: "app_created"
      });
      this.hasMany(models.Appointments,{
        foreignKey: "appointments_updated_by",
        as: "app_updated"
      });
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
    users_id     : {
    type         : DataTypes.UUID,
    primaryKey   : true, 
    defaultValue : DataTypes.UUIDV4,
    comment      : "This contains IDs for users"
    },
    users_fname  : {
      type       : DataTypes.STRING,
      allowNull  : false,
      validate   : {
        notNull  :{msg: 'Please enter your first name'},
        notEmpty :{msg: 'This field is required'}
      },
      comment    : "This will be the users' first name",
    },
    users_mname  : {
      type       : DataTypes.STRING,
      allowNull  : true,
      comment    : "This will be the middle name",
    },
    users_lname: {
      type       : DataTypes.STRING,
      allowNull  : false,
      validate   : {
        notNull  :{msg: 'Please enter your last name'},
        notEmpty :{ msg: 'This field is required'}
      },
      comment    : "This will contain the users last name",
    },
    users_full_name :{
      type          : DataTypes.STRING,
      set(value){
        this.setDataValue("users_full_name", 
        this.users_fname+ " "+ this.users_mname+ " "+ this.users_lname);
      },
      comment: "This will be the full name part",
    },
    users_birthdate: {
      type         : DataTypes.DATEONLY,
      allowNull    : false,
      validate     : {
        notNull    :{msg: 'Please enter your birth date'},
        notEmpty   :{msg: 'This field is required' }
      },
      comment      : "This will be the birth date column",
    },
    users_gender :{
      type       : DataTypes.STRING,
      allowNull  : false,
      validate   :{
        isIn     :{
          args   :[["Male", "Female", "Other", "Prefer not to say"]], 
          msg    : "Gender should be Male, Female, Other, Prefer not to say",
        },
        notNull  :{msg: 'Please choose from provided choices'},
        notEmpty :{msg: 'This field is required'}
      },
      comment    : "This will be the gender column for the users",
    },
    users_civil_status :{
      type             : DataTypes.STRING,
      allowNull        : false,
      validate         :{
        isIn    :{
          args  :[["Single", "Married", "Divorced", "Widowed"]], // for dropdown
          msg   : "Civil status should be Single, Married, Divorce, or Widowed"
        },
        notNull :{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'},
      },
      comment: "This will contain the civil status of the users",
    },
    users_phone_number : {
      type: DataTypes.INTEGER,
      allowNull: false,

      comment: "This will contain hashed password",
    },
    users_email :{
      type      : DataTypes.STRING,
      allowNull : false,
      validate  :{
        isEmail : {args: true, msg: "Please enter a valid email"},
        notNull : { args: true, msg: "You must enter a valid email" },
      },
      unique : "email",
      comment: "This will contain the unique email of the users",
    },
    users_password :{
      type         : DataTypes.STRING,
      allowNull : false,
      validate  : {
        notNull : { args: true, msg: "You must enter password" },
        len     : { args: [8,60], msg: 'Password should atleast have 8 characters' },
     },
     comment: "This will contain hashed password",
    },
    users_type :{
      type     : DataTypes.STRING,
      allowNull: false,
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
      type       : DataTypes.STRING,
      allowNull  : false,
      defaultValue : 'Active',
      validate   : {
        isIn :{
          args :[["Active", "Inactive"]], 
        },
    },
    comment: "This contains if the user is deactivated or not",
    },
    users_created_by: {
      type: DataTypes.UUID,
      allowNull: true,
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
  });
  return Users;
};