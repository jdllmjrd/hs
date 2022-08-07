'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // User can create many services
      // but a service can only have one user
      // One to One
      this.belongsTo(models.Users, {
        as: 'created',
        foreignKey: "services_created_by",
      });
      // User can update many services
      // but a service can only have one user
      // One to One
      this.belongsTo(models.Users, {
        as: "updated",
        foreignKey: "services_updated_by",
      });
    }
  }
  Services.init({
    services_id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4,
      comment: 'This contains UUIDV4 for service ID',
    },
    services_name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter service name'},
        notEmpty:{msg: 'This field is required'}
      },
      comment: "This column is for "
      
    },
    services_description: {
      type : DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter service description'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    services_image: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter service image'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    services_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Available'
    },
    services_created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: sequelize.Users,
        key: "users_id",
      },
    },
    services_updated_by: {
      allowNull: true,
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
    createdAt: 'services_created_at',
    updatedAt: "services_updated_at",
    modelName: 'Services',
  });
  return Services;
};