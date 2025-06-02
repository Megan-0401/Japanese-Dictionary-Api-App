USE dictionary;

SELECT words.id, kanji.kanji, hiragana.hiragana, romanji.romanji, meanings.english
FROM words
LEFT JOIN kanji ON words.kanji_id = kanji.id
JOIN hiragana ON words.hiragana_id = hiragana.id
JOIN romanji ON words.romanji_id = romanji.id
JOIN word_meanings ON words.id = word_meanings.word_id
JOIN meanings ON meanings.id = word_meanings.meaning_id;

SELECT hiragana.hiragana
FROM words
JOIN hiragana ON words.hiragana_id = hiragana.id
JOIN word_classes ON words.class_id = word_classes.id
WHERE word_classes.class = 'noun';
