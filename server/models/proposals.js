module.exports = function(sequelize, DataTypes) {
  const Proposals = sequelize.define("Proposals", {
    proposalId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    maxBid: DataTypes.INTEGER,
    details: DataTypes.TEXT
  });
  return Proposals;
};
