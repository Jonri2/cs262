--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @author Jon Ellis
-- @version Fall, 2019
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys
DROP TABLE IF EXISTS PlayerGame, Game, Player, Property, PlayerGameProperty;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp,
	finished bool
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	location integer
	);

CREATE TABLE Property (
	ID integer PRIMARY KEY,
	name varchar(50),
	cost integer
	);

CREATE TABLE PlayerGameProperty (
	gameID integer REFERENCES Game(ID),
	playerID integer REFERENCES Player(ID),
	propertyID integer REFERENCES Property(ID),
	houses integer,
	hotels integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerGameProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00', true);
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00', true);
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00', true);
INSERT INTO Game VALUES (4, NULL, false);
INSERT INTO Game VALUES (5, '2019-10-24 18:41:00', true);

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (1, 2, 0.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (2, 2, 0.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (2, 3, 500.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (3, 2, 0.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, NULL, NULL);
INSERT INTO PlayerGame VALUES (4, 1, NULL, 450, 5);
INSERT INTO PlayerGame VALUES (4, 2, NULL, 230, 18);
INSERT INTO PlayerGame VALUES (4, 3, NULL, 360, 12);

INSERT INTO Property VALUES (1, 'Boardwalk', 400);
INSERT INTO Property VALUES (2, 'Park Place', 350);
INSERT INTO Property VALUES (3, 'Marvin Gardens', 260);
INSERT INTO Property VALUES (4, 'Pennsylvania Ave', 300);

INSERT INTO PlayerGameProperty VALUES (4, 1, 3, 2, 0);
INSERT INTO PlayerGameProperty VALUES (4, 1, 1, 0, 0);
INSERT INTO PlayerGameProperty VALUES (4, 2, 2, 4, 1);
INSERT INTO PlayerGameProperty VALUES (4, 3, 4, 0, 1);
