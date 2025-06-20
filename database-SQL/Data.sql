USE dictionary;

-- adding word classes
INSERT INTO word_classes (word_class)
VALUES ('pronoun'), ('noun'), ('-i adjective'), ('-na adjective'), ('verb');

-- adding word categories
INSERT INTO categories (category)
VALUES ('animals'), ('architecture'), ('countries & languages'), ('clothes & fashion'), ('creativity'), ('date & time'), ('directions'), 
('emotions'), ('family'), ('food & drink'), ('literature'), ('negative'), ('occupations'), ('people'), ('positive'), ('question'), ('relationships'),
('school'), ('shopping'), ('size'), ('sports'), ('traits'), ('transport'), ('weather & seasons'), ('work'), ('unclassified');

-- adding sentences
INSERT INTO sentences (jp_sentence, eng_sentence)
VALUES ('あなた は 学生 です か？', 'Are you a student?'), ('僕 の 母 は 医者 です。', 'My mum/mom is a doctor.'),
('その 車 は とても 高い です！', 'That car is very expensive!'), ('鉛筆 は どこ です か？', 'Where is the pencil?'),
('この 店 で りんご が 安い です ね。', "The apples at this store are cheap, aren't they?"), ('おいしい 寿司 が 好き です。', 'I like delicious sushi.'),
('今日 は 私 の 誕生日 です。', 'Today is my birthday.');

-- adding words
INSERT INTO words (kanji, hiragana, katakana, romanji, class_id, sentence_id)
VALUES ('学生', 'がくせい', 'N/A', 'gakusei', 2, 1), ('N/A', 'あなた', 'N/A', 'anata', 1, 1), ('医者', 'いしゃ', 'N/A', 'isha', 2, 2),
('車', 'くるま', 'N/A', 'kuruma', 2, 3), ('高い', 'たかい', 'N/A', 'takai', 3, 3), ('鉛筆', 'えんぴつ', 'N/A', 'enpitsu', 2, 4),
('安い', 'やすい', 'N/A', 'yasui', 3, 5), ('寿司', 'すし', 'N/A', 'sushi', 2, 6), ('N/A', 'おいしい', 'N/A', 'oishii', 3, 6),
('今日', 'きょう', 'N/A', 'kyou', 2, 7);

INSERT INTO meanings (english)
VALUES ('student'), ('you'), ('doctor'), ('car'), ('tall'), ('expensive'), ('pencil'), ('cheap'), ('sushi'), ('delicious'), ('tasty'), ('today');

INSERT INTO word_meanings
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (5,6), (6, 7), (7, 8), (8, 9), (9, 10), (9, 11), (10, 12);

INSERT INTO word_categories
VALUES (1, 18), (2, 14), (3, 13), (4, 23), (5, 20), (5, 19), (6, 5), (7, 19), (8, 10), (9, 10), (9, 15), (10, 6);