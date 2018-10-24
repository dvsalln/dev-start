DROP DATABASE IF EXISTS proposals_db;
CREATE DATABASE proposal_db;

USE proposal_db;

CREATE TABLE Proposals
(
  proposalId INT,
  title VARCHAR(255),
  maxBid INT,
  details TEXT,
  postedBy VARCHAR(50),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);

-- Insert data into Proposals table
INSERT INTO proposals_db.Proposals
  (proposalId, title, maxBid, details, postedBy, createdAt, updatedAt)
VALUES
  ('20180802001', 'Looking for Full Stack Developers to build health app', '2000', 'I am looking for a team of developers to help me build my health app.', 'MarkC', '2018/09/09 00:00', '2018/09/09 00:00');

INSERT INTO proposals_db.Proposals
  (proposalId, title, maxBid, details, postedBy, createdAt, updatedAt)
VALUES
  ('20180802002', 'Need a FrontEnd Developer to help!!', '500', 'I am graphic designer looking for a starting front end developer to help build my portfolio website. Must know CSS and Bootstrap', 'SarahS', '2018/09/10 00:00', '2018/09/10 00:00');

INSERT INTO proposals_db.Proposals
  (proposalId, title, maxBid, details, postedBy, createdAt, updatedAt)
VALUES
  ('20180802002', 'Need Backend Developer for help!!', '500', 'I am front end developer and I am working on a client project that needs backend linkup with their database. I am not good with back end so I am looking for a starting back end developer for help. This person will work with SQL', 'BarryG', '2018/09/11 00:00', '2018/09/11 00:00');

CREATE TABLE Bids
(
  bidId INT,
  proposalId INT,
  asTeam BOOLEAN,
  submitter VARCHAR(50),
  bidAmount INT,
  coverLetter TEXT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
)

-- Insert data into Bids table
INSERT INTO proposals_db.Bids
  (bidId, proposalId, asTeam, submitter, bidAmount, coverLetter, createdAt, updatedAt)
VALUES
  ('201808082001-01', '20180802001', 'True', 'SmartCoders', '2000', 'Hi, we are a team of smart coders and we are very interested in helping you build your health app. Our team consist 4 people, 1 designer, 1 front end, and 2 backend developers. Please check us out at our team page for our past projects', '2018/09/09 00:00', '2018/09/09 00:00');

INSERT INTO proposals_db.Bids
  (bidId, proposalId, asTeam, submitter, bidAmount, coverLetter, createdAt, updatedAt)
VALUES
  ('201808082001-02', '20180802001', 'True', 'SQLInjectors', '1500', 'Hi Mark, we are a team of developers with skills and experience with building app using SQL database. We can develop fast and make quick roll out of your app for less. Our goal is for our team to get as much portfolio work out there', '2018/09/09 00:00', '2018/09/09 00:00');
