"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "users_id",
        onDelete: "CASCADE",
      });
    }
  }
  Calendar.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      users_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: sequelize.Users,
        referencesKey: "users_id",
        onDelete: "cascade",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      updated_by: { type: DataTypes.UUID, allowNull: true },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Calendar",
    }
  );
  return Calendar;
};
