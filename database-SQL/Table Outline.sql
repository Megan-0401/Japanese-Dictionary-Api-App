CREATE DATABASE dictionary;

USE dictionary;

CREATE TABLE word_classes (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
word_class VARCHAR (50) NOT NULL,
PRIMARY KEY (id));

CREATE TABLE sentences (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
jp_sentence VARCHAR (100) NOT NULL,
eng_sentence VARCHAR (100) NOT NULL,
PRIMARY KEY (id));

CREATE TABLE words (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
kanji VARCHAR (20),
hiragana VARCHAR (50),
katakana VARCHAR (50),
romanji VARCHAR (50) NOT NULL,
class_id INT UNSIGNED NOT NULL,
sentence_id INT UNSIGNED NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (class_id) REFERENCES word_classes(id),
FOREIGN KEY (sentence_id) REFERENCES sentences(id)
);

CREATE TABLE meanings (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
english VARCHAR (50),
PRIMARY KEY (id));

CREATE TABLE word_meanings (
word_id INT UNSIGNED NOT NULL,
meaning_id INT UNSIGNED NOT NULL,
PRIMARY KEY (word_id, meaning_id),
FOREIGN KEY (word_id) REFERENCES words(id),
FOREIGN KEY (meaning_id) REFERENCES meanings(id));

CREATE TABLE categories (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
category VARCHAR (50),
PRIMARY KEY (id));

CREATE TABLE word_categories (
word_id INT UNSIGNED NOT NULL,
category_id INT UNSIGNED NOT NULL,
PRIMARY KEY (word_id, category_id),
FOREIGN KEY (word_id) REFERENCES words(id),
FOREIGN KEY (category_id) REFERENCES categories(id));

CREATE TABLE users (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
username VARCHAR (50),
password VARCHAR (50),
PRIMARY KEY (id));

CREATE TABLE bookmarks (
word_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
PRIMARY KEY (word_id, user_id),
FOREIGN KEY (word_id) REFERENCES words(id),
FOREIGN KEY (user_id) REFERENCES users(id));