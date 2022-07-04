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
        // Association to Branch
        // One to Many
       this.belongsTo(models.Branches, {
        as: "appointment_branch",
        foreignKey: 'appointments_branch',
        onDelete   : 'RESTRICT'
       });
       this.belongsTo(models.Dentists_schedules, {
        as: "appointment_sched",
        foreignKey: 'appointments_sched',
        onDelete   : 'RESTRICT'
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
    appointments_branch: {
      type: DataTypes.UUID,
      references: {
        model: sequelize.Branches,
        key: "branches_id",
      },
      comment: "This column is for branch selected by the user"
    },
    // Foreign Key -- Dentists Schedules Table
    appointments_sched: {
      type: DataTypes.UUID,
      references: {
        model: sequelize.Dentists_schedules,
        key: "schedules_id",
      },
      comment: "This contain the preferred schedule base on branch"
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