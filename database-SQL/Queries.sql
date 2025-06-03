USE dictionary;

SELECT words.id, kanji.kanji, hiragana.hiragana, romanji.romanji, meanings.english
FROM words, kanji, hiragana, romanji, meanings, word_meanings
WHERE words.kanji_id = kanji.id
AND words.hiragana_id = hiragana.id
AND words.romanji_id = romanji.id
AND word_meanings.meaning_id = meanings.id
AND word_meanings.word_id = words.id;