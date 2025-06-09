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