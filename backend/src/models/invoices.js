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
      
      // Association to Users table
      // One to Many
      this.belongsTo(models.Users, {
        foreignKey : 'invoices_created_by',
        as: 'invoice_created',
        onDelete: 'CASCADE'
      });
      //One to Many
      this.belongsTo(models.Users, {
        foreignKey : 'invoices_updated_by',
        as: 'invoice_updated',
        onDelete: 'CASCADE'
      });
      //One to Many
      this.hasMany(models.Invoices_services, {
        as: "dump_invoice",
        foreignKey: "inser_invoice_id",
        onDelete: 'CASCADE'
      });
    }
  }
  Invoices.init({
    id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    // Create an invoice only for those patients
    // that has a successful appointment
    invoices_number: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue : DataTypes.UUIDV4
    },
    invoices_issued_to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoices_description: {
      type : DataTypes.TEXT,
      allowNull: true,
    },
    invoices_discount: {
      type : DataTypes.INTEGER,
      allowNull: true,
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
          args :[["Unpaid", "Paid", "Deleted"]], // for dropdown 
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
    },
    invoices_created_by:{
      type: DataTypes.UUID,
      allowNull: false,
      references :{
        model: sequelize.Users,
        key: "users_id"
      }
    },
    invoices_updated_by:{
      type: DataTypes.UUID,
      allowNull: false,
      references :{
        model: sequelize.Users,
        key: "users_id"
      }
    }
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