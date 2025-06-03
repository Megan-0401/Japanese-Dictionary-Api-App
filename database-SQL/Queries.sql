USE dictionary;

SELECT words.id, words.kanji, words.hiragana, words.romanji, meanings.english, word_classes.word_class
FROM words, meanings, word_meanings, word_classes
WHERE word_meanings.meaning_id = meanings.id
AND word_meanings.word_id = words.id
AND words.class_id = word_classes.id;