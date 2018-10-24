module.exports = function(sequelize, DataTypes) {
  const Bids = sequelize.define("Bids", {
    bidId: DataTypes.INTEGER,
    proposalId: DataTypes.INTEGER,
    asTeam: DataTypes.BOOLEAN,
    bidAmount: DataTypes.INTEGER,
    coverLetter: DataTypes.TEXT
  });
  return Bids;
};
