"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One to Many
      this.belongsTo(models.Branches, {
        foreignKey: "appointments_branch",
        as: "branch",
        onDelete: "CASCADE",
      });
      // One to Many
      this.belongsTo(models.Dentists_schedules, {
        foreignKey: "appointments_sched",
        as: "app_sched",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Users, {
        foreignKey: "appointments_created_by",
        as: "created",
        onDelete: "CASCADE",
      });
      // One to Many
      this.belongsTo(models.Users, {
        foreignKey: "appointments_updated_by",
        as: "updated",
        onDelete: "CASCADE",
      });
    }
  }
  Appointments.init(
    {
      appointments_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        comment: "This contains UUIDV4 for appointments ID",
      },
      // Foreign Key -- BRANCH table
      appointments_branch: {
        type: DataTypes.UUID,
        references: {
          model: sequelize.Branch,
          key: "branches_id",
        },
        comment: "This column is for branch selected by the user",
      },
      // Foreign Key -- Dentists Schedules Table
      appointments_sched: {
        type: DataTypes.UUID,
        references: {
          model: sequelize.Dentists_schedules,
          key: "schedule_id",
        },
        comment: "This contain the preferred schedule base on branch",
      },
      appointments_purpose: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "This is where a user input his/her purpose",
      },
      appointments_comment: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment:
          "This is where a user-patient/user-dentist comment or any additional follow ups",
      },
      appointments_success: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment:
          "This is where a staff choose if an appointment is success or not",
      },
      appointments_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending",
        validate: {
          isIn: {
            args: [["Pending", "Approved", "Disapproved", "Canceled"]], // for dropdown
          },
        },
        comment:
          "This is where a patient or staff will select what is the status of an appointment",
      },
      appointments_type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Online",
        validate: {
          isIn: {
            args: [["Online", "Walk-in"]], // for dropdown
          },
        },
        comment:
          "This is where a patient or staff will select what is the type of an appointment",
      },
      appointments_created_by: {
        type: DataTypes.UUID,
        references: {
          model: sequelize.Users,
          key: "users_id",
        },
      },
      appointments_updated_by: {
        type: DataTypes.UUID,
        references: {
          model: sequelize.Users,
          key: "users_id",
        },
      },
    },

    {
      sequelize,
      timestamps: true,
      createdAt: "appointments_created_at",
      updatedAt: "appointments_updated_at",
      modelName: "Appointments",
    }
  );
  return Appointments;
};
