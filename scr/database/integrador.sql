-- Active: 1679002400481@@127.0.0.1@3306

CREATE TABLE users (
	id TEXT UNIQUE PRIMARY KEY DEFAULT NULL,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME())NOT NULL);


INSERT INTO users(id, name, email, password)
VALUES("u001", "Layane", "eulayanemnzs@gmail.com", "layane123"),
("u002", "Lucas", "lucasnc@gmail.com", "lucas1607"),
("u003", "Labenu", "labenu@gmail.com", "labenu2021");


SELECT * FROM users;

DROP TABLE users;



CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    content TEXT NOT NULL,
    comment INTEGER DEFAULT(0) NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL,
    dislikes INTEGER DEFAULT(0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
);

INSERT INTO posts(id, user_id, content, comment, likes, dislikes)
VALUES("p001", "u001", "vídeo de bicicleta", 12, 35, 10),
("p002", "u002", "foto de estantes de livros", 34, 275, 20),
("p003", "u003", "videos de unha", 855, 270, 135);


SELECT * FROM posts;

DROP TABLE posts;


CREATE TABLE comments (
     id TEXT PRIMARY KEY UNIQUE NOT NULL,
     user_id TEXT NOT NULL,
     post_id TEXT NOT NULL,
     comment TEXT NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL,
    dislikes INTEGER DEFAULT(0) NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users (id)
     ON DELETE CASCADE
     ON UPDATE CASCADE, 
    FOREIGN KEY (post_id) REFERENCES posts (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
);

INSERT INTO comments(id, user_id, post_id, comment)
VALUES("c001", "u001", "p001", "comentario no vídeo de bicicleta"),
("c002", "u002", "p002", "comentario em foto de estantes de livros"),
("c003", "u003", "p003", "comentario em videos de unha");


SELECT * FROM comments;

DELETE FROM comments;


CREATE TABLE posts_likes_dislikes(
 user_id TEXT NOT NULL,
    post_id TEXT NOT NULL,
    likes INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


INSERT INTO posts_likes_dislikes(user_id, post_id, likes)
VALUES("u001", "p001", 232),
("u002", "p002", 290),
("u003", "p003", 650);


SELECT * FROM posts_likes_dislikes;

DELETE FROM posts_likes_dislikes;



CREATE TABLE comments_likes_dislikes(
    user_id TEXT NOT NULL,
    comment_id TEXT NOT NULL,
    likes INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comments (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


INSERT INTO comments_likes_dislikes(user_id, comment_id, likes)
VALUES("u001", "c001", 232),
("u002", "c002", 290),
("u003", "c003", 650);


SELECT * FROM posts_likes_dislikes;

DELETE FROM posts_likes_dislikes;