'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentists_schedules extends Model {
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

    }
  }
  Dentists_schedules.init({
    id: {
      type : DataTypes.UUID,
      field: 'schedules_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4,
      comment: 'This contains UUIDV4 for schedules ID',
    },
    // Foreign Key - DENTIST 
    // ID but can view name of dentists
    schedule_dentist: {
      type : DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please select dentist schedule'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This column is for available dentist selected by user-staff and admin"
      
    },
    // Foreign key -- BRANCH    
    schedule_branch: {
      type : DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please select branch'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This column is for where the dentist will be for the specific day"
    },
    // If this is 0, only mean that this is not 
    // available or not seen on patient side
    schedule_no: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please select your preferred dentist'},
        notEmpty:{msg: 'This field is required'}
      },
      defaultValue : 1,
      comment: "This is an indicator if schedule is already taken"
    },
    
    schedule_date: {
        type : DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull:{msg: 'Please input your purpose'},
          notEmpty:{msg: 'This field is required'}
        },
        comment: "This is where schedule date for dentist created by staff/admin",
      },
      // Start time of a specific schedule
    schedule_start_time: {
        type : DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull:{msg: 'Please input the schedule start time'},
          notEmpty:{msg: 'This field is required'}
        },
        comment: "This is where start time schedule for dentist created by staff/admin",
      },
      // End time of a specific schedule
    schedule_end_time: {
        type : DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull:{msg: 'Please input the schedule end time'},
          notEmpty:{msg: 'This field is required'}
        },
        comment: "This is where end time schedule for dentist created by staff/admin",
      },

      // Concatenated Dentist name, Date, and time
      // We have to convert date and time in to STRING
    schedule_dentist_datetime :{
        type : DataTypes.STRING,
        set(value){
          this.setDataValue("schedule_dentist_datetime", 
          this.schedule_dentist+ " "+ this.toString(users_mname)+ " "
            + this.toString(schedule_start_time)+ " - "
            + this.toString(schedule_start_time)
            );
        },
        comment: "This will be the full name part",
      },
      // Status will be set by the denstist
    schedule_status :{
        type : DataTypes.STRING,
        allowNull: false,
        defaultValue : 'Approved',
        validate: {
          isIn :{
            args :[["Approved", "Disapproved"]], 
          },
      },
      comment: "This contains if the schedule is approved or disapproved by the dentist",
    },
},
 {
    sequelize,
    timestamps: true,
    createdAt: 'dentist_created_at',
    updatedAt: "dentist_updated_at",
    modelName: 'Dentists_schedules',
  });
  return Dentists_schedules;
};