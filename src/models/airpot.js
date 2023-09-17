"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airpot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });
    }
  }
  Airpot.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      address: DataTypes.STRING,
      cityId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Airpot",
    }
  );
  return Airpot;
};
