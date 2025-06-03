USE dictionary;

-- adding word classes

INSERT INTO word_classes (class)
VALUES ('pronoun'), ('noun'), ('-i adjective'), ('-na adjective'), ('verb'), ('determiner'), ('preposition');

-- adding word categories

INSERT INTO categories (category)
VALUES ('animals'), ('buildings'), ('countries & languages'), ('clothes & fashion'), ('creativity'), ('date & time'), ('directions'), 
('emotions'), ('family'), ('food'), ('literature'), ('negative'), ('occupations'), ('people'), ('positive'), ('relationships'), ('school'),
('shopping'), ('size'), ('sports'), ('traits'), ('transport'), ('weather'), ('work'), ('unclassified');

INSERT INTO kanji (kanji)
VALUES ('N/A'), ('学生'), ('医者'), ('車'), ('高い'), ('鉛筆'), ('安い'), ('寿司'), ('今日');

INSERT INTO hiragana (hiragana)
VALUES ('N/A'), ('がくせい'), ('あなた'), ('いしゃ'), ('くるま'), ('たかい'), ('えんぴつ'), ('やすい'), ('すし'), ('おいしい'), ('きょう');

INSERT INTO katakana (katakana)
VALUES ('N/A');

INSERT INTO romanji (romanji)
VALUES ('gakusei'), ('anata'), ('isha'), ('kuruma'), ('takai'), ('enpitsu'), ('yasui'), ('sushi'), ('oishii'), ('kyou');

INSERT INTO meanings (english)
VALUES ('student'), ('you'), ('doctor'), ('car'), ('tall'), ('expensive'), ('pencil'), ('cheap'), ('sushi'), ('delicious/tasty'), ('today');

INSERT INTO sentences (jp_sentence, eng_sentence)
Values ('あなたは学生ですか？', 'Are you a student?'), ('僕の母は医者です。', 'My mum/mom is a doctor.'),
('その車はとても高いです！', 'That car is very expensive!'), ('鉛筆はどこですか？', 'Where is the pencil?'),
('この店でりんごが安いですね。', "The apples at this store are cheap, aren't they?"), ('おいしい寿司が好きです。', 'I like delicious sushi.'),
('今日は私の誕生日です。', 'Today is my birthday.');

INSERT INTO words (kanji_id, hiragana_id, katakana_id, romanji_id, class_id, sentence_id)
VALUES (2, 2, 1, 1, 2, 1),(1, 3, 1, 2, 1, 1),(3, 4, 1, 3, 2, 2);

INSERT INTO word_meanings
VALUES (1, 1), (2, 2), (3, 3);