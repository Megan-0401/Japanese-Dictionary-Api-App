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