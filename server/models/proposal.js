module.exports = function(sequelize, DataTypes) {
  const Proposal = sequelize.define("Proposal", {
    title: DataTypes.STRING,
    maxBid: DataTypes.INTEGER,
    details: DataTypes.TEXT
  });
  return Proposal;
};
