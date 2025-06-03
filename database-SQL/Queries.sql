USE dictionary;

SELECT words.*, word_classes.*, sentences.*
FROM words, word_classes, sentences
WHERE words.class_id = word_classes.id
AND words.sentence_id = sentences.id;