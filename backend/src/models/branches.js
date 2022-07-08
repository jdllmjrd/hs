'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Many to One - Dentists_Schedule
      this.hasMany(models.Dentists_schedules, {
        foreignKey  : "schedule_branch",
        as          : "sched_branch",
        onDelete    : 'CASCADE'
      });
      //Many to One - Appointments table
      this.hasMany(models.Appointments, {
        foreignKey: "appointments_branch",
        as        : "app_branch",
        onDelete  : 'CASCADE'
      });
      // users - branch updated
      this.belongsTo(models.Users, {
        foreignKey: "branches_updated_by",
        as: "updated_branch"
      });
      // users - Dentist created
      this.belongsTo(models.Users, {
        foreignKey: "branches_created_by",
        as: "created_branch"
      });
    
    }
  }
  Branches.init({
    branches_id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    branches_name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter branch name'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    branches_contact_person: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter branch contact person'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    branches_phone_number: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "You must enter Phone Number" },
        len: { args: [11,11], msg: 'Phone Number is invalid should be 11 numbers' },
        isInt: { args: true, msg: "You must enter Phone Number" },
      }
    },
    branches_description: {
      type : DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter branch description'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    branches_google_map: {
      type : DataTypes.TEXT,
      allowNull: true,
      isUrl: true
    },
    branches_image: {
      type : DataTypes.STRING,
      allowNull: true,
    },
    branches_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Open' // Open or Close, it depends to the admin
      },
      branches_created_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: sequelize.Users,
          key: "users_id",
        },
      },
      branches_updated_by: {
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
    createdAt: "branches_created_at",
    updatedAt: "branches_updated_at",
    modelName: 'Branches',
  });
  return Branches;
};