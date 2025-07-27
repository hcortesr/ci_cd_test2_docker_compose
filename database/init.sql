-- 1. Create the database
CREATE DATABASE IF NOT EXISTS football;
USE football;

-- 2. Create the clubs table
CREATE TABLE IF NOT EXISTS clubs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    founded_year INT
);

-- 3. Insert some Mexican football clubs
INSERT INTO clubs (name, city, founded_year) VALUES
('Club América', 'Mexico City', 1916),
('Chivas Guadalajara', 'Guadalajara', 1906),
('Cruz Azul', 'Mexico City', 1927),
('Pumas UNAM', 'Mexico City', 1954),
('Tigres UANL', 'San Nicolás de los Garza', 1960),
('CF Monterrey', 'Monterrey', 1945),
('Santos Laguna', 'Torreón', 1983),
('Toluca', 'Toluca', 1917),
('Club León', 'León', 1944),
('Atlas', 'Guadalajara', 1916);
