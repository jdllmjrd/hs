"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dentists_schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // this.belongsTo(models.Users, {
      //   foreignKey: "schedule_created_by",
      //   as: "created",
      //   onDelete: "CASCADE",
      // });

      // this.belongsTo(models.Users, {
      //   foreignKey: "schedule_updated_by",
      //   as: "updated",
      //   onDelete: "CASCADE",
      // });
      // Schedule has a branch
      this.belongsTo(models.Branches, {
        foreignKey: "schedule_branch",
        as: "sched_branch",
        onDelete: "CASCADE",
      });
      //One to Many -- Appointments and Schedule
      this.hasMany(models.Appointments, {
        foreignKey: "appointments_sched",
        as: "app_sched",
        onDelete: "CASCADE",
      });
      //One to Many -- Schedule to Dentists use
      this.belongsTo(models.Users, {
        foreignKey: "schedule_dentist",
        as: "sched",
        onDelete: "CASCADE",
      });
    }
  }
  Dentists_schedules.init(
    {
      schedule_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: "This contains UUIDV4 for schedules ID",
      },
      // Foreign Key - DENTIST
      // ID but can view name of dentists
      schedule_dentist: {
        type: DataTypes.UUID,
        allowNull: false,
        references: sequelize.Users,
        referencesKey: "users_id",
        onDelete: "CASCADE",
        comment:
          "This column is for available dentist selected by user-staff and admin",
      },
      // Foreign key -- BRANCH
      schedule_branch: {
        type: DataTypes.UUID,
        allowNull: true,
        references: sequelize.Branches,
        referencesKey: "branches_id",
        onDelete: "CASCADE",
        comment: "This column is for branch selected by the staff",
      },

      schedule_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment:
          "This is where schedule date for dentist created by staff/admin",
      },
      // Start time of a specific schedule
      schedule_start_time: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: "Please input the schedule start time" },
          notEmpty: { msg: "This field is required" },
        },
        comment:
          "This is where start time schedule for dentist created by staff/admin",
      },
      // End time of a specific schedule
      schedule_end_time: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: "Please input the schedule end time" },
          notEmpty: { msg: "This field is required" },
        },
        comment:
          "This is where end time schedule for dentist created by staff/admin",
      },
      // Concatenated Dentist name, Date, and time
      // We have to convert date and time in to STRING
      schedule_dentist_datetime: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue(
            "schedule_dentist_datetime",
              this.schedule_date +
              " " +
              this.schedule_start_time +
              " - " +
              this.schedule_end_time
          );
        },
        comment: "This will be the full name part",
      },
      // Status will be set by the denstist
      schedule_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Approved",
        validate: {
          isIn: {
            args: [["Approved", "Disapproved"]],
          },
        },
        comment:
          "This contains if the schedule is approved or disapproved by the dentist",
      },
      schedule_created_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      schedule_updated_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },

    {
      sequelize,
      timestamps: true,
      createdAt: "sched_created_at",
      updatedAt: "sched_updated_at",
      modelName: "Dentists_schedules",
    }
  );
  return Dentists_schedules;
};
