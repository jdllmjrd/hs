'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoices_Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Invoices, {
        foreignKey: 'inser_invoice_id',
      });
    }
  }
  Invoices_Services.init({
  id: {
    type : DataTypes.UUID,
    field: 'inser_id',
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
  modelName: 'Invoices_Services',
});
  return Invoices_Services;
};