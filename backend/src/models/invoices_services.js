'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoices_services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoices_services.init({
    inser_id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
  
     inser_invoice_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: sequelize.Invoices,
        key: 'invoices_id'
      }
    },
     inser_service_name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Service name is required'},
        notEmpty:{msg: 'Service name is required'}
      }
    },
    inser_service_price: {
      type : DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull:{msg: 'Service price is required'},
        notEmpty:{msg: 'Service price is required'},
        isInt:{msg: 'Must be a Number'}
      }
    },
  }, 
  {
    sequelize,
    timestamp: true,
    createdAt: "inser_created_at",
    updatedAt: "inser_updated_at",
    modelName: 'Invoices_services',
  });
    return Invoices_services;
  };