-- Create the database
CREATE DATABASE club_de_cuervos;
USE club_de_cuervos;

-- Players table
CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    age INT,
    nationality VARCHAR(50)
);

-- Matches table
CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    match_date DATE NOT NULL,
    opponent VARCHAR(100),
    home_goals INT,
    away_goals INT
);

-- Assists table (links players and matches)
CREATE TABLE assists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT,
    match_id INT,
    assists_count INT DEFAULT 0,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (match_id) REFERENCES matches(id)
);

-- Insert some players
INSERT INTO players (name, position, age, nationality) VALUES
('John Smith', 'Forward', 28, 'Mexico'),
('Luis Gomez', 'Defender', 24, 'Argentina'),
('Carlos Martinez', 'Goalkeeper', 30, 'Colombia');

-- Insert some matches
INSERT INTO matches (match_date, opponent, home_goals, away_goals) VALUES
('2025-07-01', 'Tigers', 3, 1),
('2025-07-15', 'Eagles', 2, 2);

-- Insert some assists
INSERT INTO assists (player_id, match_id, assists_count) VALUES
(1, 1, 1),
(2, 1, 0),
(1, 2, 2);