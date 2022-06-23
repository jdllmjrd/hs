'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
       * We will use belongTo or belongsToMany, where FK column is.
       */
        // Association to Invoices table
       this.hasOne(models.Invoices);
        // Association to Branch
        // One to Many
       this.belongsTo(models.Branches, {
        foreignKey: 'appointments_branch_id'
       });
    }

  }
  Appointments.init({
    id: {
      type : DataTypes.UUID,
      field: 'appointments_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4,
      comment: 'This contains UUIDV4 for appointments ID',
    },
    // Foreign Key -- BRANCH table
    appointments_branch_id: {
      type : DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter service name'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This column is for branch selected by the user"
      
    },
    appointments_date: {
      type : DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please select your prefer appointment date'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This column is for user preferred appointment date"
    },
    // Foreign Key -- Dentists Schedules Table
    appointments_dentist: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please select your preferred dentist'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This contain the preferred dentist for user"
    },
    appointments_purpose: {
        type : DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull:{msg: 'Please input your purpose'},
          notEmpty:{msg: 'This field is required'}
        },
        comment: "This is where a user input his/her purpose",
      },
    appointments_comment: {
        type : DataTypes.TEXT,
        allowNull: true,
        comment: "This is where a user-patient/user-dentist comment or any additional follow ups",
      },
    appointments_success: {
        type : DataTypes.TEXT,
        allowNull: true,
        comment: "This is where a staff choose if an appointment is success or not",
      },
    appointments_status: {
        type : DataTypes.STRING,
        allowNull: false,
        defaultValue : 'Pending',
        validate: {
            isIn :{
                args :[["Pending","Approved", "Disapproved", "Cancelled"]], // for dropdown
            },
        },
        comment: "This is where a patient or staff will select what is the status of an appointment",
      },
    appointments_type: {
        type : DataTypes.STRING,
        allowNull: false,
        defaultValue : 'Online',
        validate: {
            isIn :{
            args :[["Online", "Walk-in" ]], // for dropdown
            },
        },
        comment: "This is where a patient or staff will select what is the type of an appointment",
      },

    },


 {
    sequelize,
    timestamps: true,
    createdAt: 'appointments_created_at',
    updatedAt: "appointments_updated_at",
    modelName: 'Appointments',
  });
  return Appointments;
};