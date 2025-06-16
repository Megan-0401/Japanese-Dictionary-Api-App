USE dictionary;

-- GET WORDS BY WORD CLASS ID
SELECT words.* FROM words
WHERE words.class_id = 3;

-- GET WORDS BY CATEGORY ID
SELECT words.* FROM words, word_categories
WHERE words.id = word_categories.word_id
AND word_categories.category_id = 19;

-- GET WORDS BY CLASS AND CATEGORY ID
SELECT words.* FROM words, word_categories
WHERE words.id = word_categories.word_id
AND words.class_id = 2
AND word_categories.category_id = 23;

-- GET WORDS BY SEARCH TERM: ENGLISH
SELECT words.* FROM words, meanings, word_meanings
WHERE word_meanings.word_id = words.id
AND word_meanings.meaning_id = meanings.id
AND meanings.english LIKE "%car%";

-- GET WORDS BY SEARCH TERM: ROMANJI
SELECT words.* FROM words
WHERE words.romanji LIKE "%a%";

-- GET WORDS BY SEARCH TERM: JAPANESE
SELECT words.* FROM words
WHERE words.kanji LIKE "%寿司%"
OR words.hiragana LIKE "%寿司%"
OR words.katakana LIKE "%寿司%";

-- GET BOOKMARKED WORDS BY USER
SELECT words.* FROM words, users, bookmarks
WHERE bookmarks.word_id = words.id
AND bookmarks.user_id = users.id
AND users.id = 1;

-- CREATE BOOKMARK
INSERT INTO bookmarks (user_id, word_id) VALUES (1,3);

-- DELETE BOOKMARK
DELETE FROM bookmarks WHERE user_id = 1 AND word_id = 1;