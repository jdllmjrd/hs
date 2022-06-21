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
      this.belongsTo(models.Users, {
        foreignKey: "branches_created_by",
      });

      this.belongsTo(models.Users, {
        foreignKey: "branches_updated_by",
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
  },
  branches_image: {
    type : DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull:{msg: 'Please enter branch image'},
      notEmpty:{msg: 'This field is required'}
    }
  },
  branches_status :{
    type : DataTypes.STRING,
    allowNull: false,
    defaultValue : 'Open' // Open or Close, it depends to the admin
    },
  branches_created_by: {
    type: DataTypes.UUID,
    allowNull:true,
    references: {
      model: sequelize.Users,
      key: "users_id",
    },
  },
  branches_updated_by: {
    type: DataTypes.UUID,
    allowNull:true,
    references: {
      model: sequelize.Users,
      key: "users_id",
    },
  },
}, 
{
  sequelize,
  timestamp: true,
  createdAt: "branches_created_at",
  updatedAt: "branches_updated_at",
  modelName: 'Branches',
});
  return Branches;
};