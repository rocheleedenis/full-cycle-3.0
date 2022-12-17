-- mysql -uroot -p

SHOW DATABASES;

USE nodedb;
CREATE Table people (id INT NOT NULL auto_increment, name VARCHAR(255), PRIMARY KEY (id));
DESC people;