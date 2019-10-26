-- Retrieve a list of all the games, ordered by date with the most recent game coming first. 
SELECT *
  FROM Game
  ORDER BY time DESC
  ;

-- Retrieve all the games that occurred in the past week.
SELECT * 
  FROM Game
  WHERE DATE_PART('day', CURRENT_DATE - time) < 7
  ;

-- Retrieve a list of players who have (non-NULL) names.
SELECT *
  FROM Player
 WHERE name IS NOT NULL
 ;

-- Retrieve a list of IDs for players who have some game score larger than 2000.
  SELECT DISTINCT playerID
    FROM PlayerGame
    WHERE score > 2000
   ;

-- Retrieve a list of players who have GMail accounts.
SELECT *
  FROM Player
  WHERE emailAddress LIKE '%@gmail%'
  ;

-- Retrieve all “The King”’s game scores in decreasing order. 
SELECT score
  FROM Player, PlayerGame
  WHERE PlayerGame.playerID = Player.ID
  AND Player.name = 'The King'
  ORDER BY score DESC
  ;

-- Retrieve the name of the winner of the game played on 2006-06-28 13:20:00. 
SELECT name winner
  FROM (SELECT score, name
    FROM Player, Game, PlayerGame
    WHERE PlayerGame.playerID = Player.ID
    AND PlayerGame.gameID = Game.ID
    AND Game.time = '2006-06-28 13:20:00'
    ORDER BY score DESC
  ) AS winner
  LIMIT 1
  ;

  -- 8.2.c. The P1.ID < P2.ID clause makes it so P1.name doesn't get selected when
  --        comparing the same row

  -- 8.2.d. You want to join a table to itself when comparing any values down a column. 