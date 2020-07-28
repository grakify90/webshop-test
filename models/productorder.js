"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productOrder.hasMany(models.product);
      productOrder.hasMany(models.order);
    }
  }
  productOrder.init(
    {
      // id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "productOrder",
    }
  );
  return productOrder;
};
