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

      // Many to One 
      this.belongsTo(models.Users, {
        as: "created" ,
        foreignKey: "branches_created_by",
        onDelete: 'RESTRICT'
      });
      // Many to One 
      this.belongsTo(models.Users, {
        as: "updated",
        foreignKey: "branches_updated_by",
        onDelete : 'RESTRICT'
      });
      //One to many - Appointments table
      this.hasMany(models.Appointments, {
        as: "app_branch",
        foreignKey: "appointments_branch_id",
        onDelete: 'RESTRICT'
      });

      //One to many - Appointments table
      this.hasMany(models.Dentists_schedules, {
        as: "sched_branch",
        foreignKey: "schedule_branch",
        onDelete: 'RESTRICT'
      });

    }
    
  }
  Branches.init({
  id: {
    type : DataTypes.UUID,
    field: 'branches_id',
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
    // validate: {
    //   notNull:{msg: 'Please enter branch image'},
    //   notEmpty:{msg: 'This field is required'}
    // }
  },
  branches_status :{
    type : DataTypes.STRING,
    allowNull: false,
    defaultValue : 'Open' // Open or Close, it depends to the admin
    },
  branches_created_by: {
    type: DataTypes.UUID,
    // allowNull: true,
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