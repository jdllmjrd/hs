'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoices.init({
  id: {
    type : DataTypes.UUID,
    field: 'invoices_id',
    primaryKey : true, 
    defaultValue : DataTypes.UUIDV4
  },

   invoices_appointments_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'appointments',
      key: 'id'
    }
  },
  invoices_no: {
    type : DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  invoices_users_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  invoices_issued_to: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  invoices_description: {
    type : DataTypes.TEXT,
    allowNull: true,
  },
  invoices_discount: {
    type : DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt:{msg: 'Must be a Number'},
    }
  },
  total_after_discount: {
    type : DataTypes.DECIMAL,
    allowNull: false,
  },
  grand_total: {
    type : DataTypes.DECIMAL,
    allowNull: false,
  },
  invoices_status :{
    type : DataTypes.STRING,
    allowNull : false,
    validate: {
      isIn :{
        args :[["Unpaid", "Paid", "Deleted"]], // for dropdown or radio button
      },
      notNull:{msg: 'Please choose from provided choices'},
      notEmpty:{msg: 'This field is required'}
    },
  },
}, 
{
  sequelize,
  timestamp: true,
  createdAt: "invoices_created_at",
  updatedAt: "invoices_updated_at",
  modelName: 'Invoices',
});
  return Invoices;
};