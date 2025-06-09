USE dictionary;

-- GET WORDS BY WORD CLASS
SELECT words.* FROM words, word_classes
WHERE words.class_id = word_classes.id
AND word_classes.word_class = "noun";