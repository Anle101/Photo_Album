
-- @BLOCK
INSERT INTO Users (email, details, name,city,province)
VALUES ("eebechard@gmail.com","uwu","Erin Bechard", "Windsor", "ON");


-- @BLOCK 
SELECT * FROM Users;

-- @BLOCK
ALTER TABLE Users
ADD name VARCHAR(255),
DROP COLUMN location,
ADD city VARCHAR(255),
ADD province VARCHAR(2)
;

-- @BLOCK
UPDATE Users
SET name = 'An Le', city='Windsor', province='ON'
WHERE user_id =1;

-- @BLOCK
CREATE INDEX email_index ON Users(email);

-- @BLOCK
CREATE TABLE Pictures (
    picture_id INT AUTO_INCREMENT,
    image_dir VARCHAR(255),
    poster_id INT NOT NULL,
    PRIMARY KEY(picture_id),
    FOREIGN KEY(poster_id) REFERENCES Users(user_id)
);

-- @BLOCK
INSERT INTO Pictures(poster_id,image_dir)
VALUES (2, '/database/profile_pik.png');

-- @BLOCK
SELECT * FROM users
INNER JOIN Pictures
ON Pictures.poster_id = user_id;