DROP DATABASE IF EXISTS proposals_db;
CREATE DATABASE proposal_db;

USE proposal_db;

CREATE TABLE Proposals
(
  ProposalId INT,
  Title VARCHAR(255),
  MaxBid INT,
  Details TEXT,
  PostedBy VARCHAR(50)
);

CREATE TABLE Bids
(
  BidId INT,
  ProposalID INT,
  AsTeam BOOLEAN,
  BidAmount INT,
  CoverLetter TEXT

)