USE dictionary;

-- adding word classes
INSERT INTO word_classes (word_class)
VALUES ('pronoun'), ('noun'), ('-i adjective'), ('-na adjective'), ('verb'), ('determiner'), ('preposition');

-- adding word categories
INSERT INTO categories (category)
VALUES ('animals'), ('buildings'), ('countries & languages'), ('clothes & fashion'), ('creativity'), ('date & time'), ('directions'), 
('emotions'), ('family'), ('food'), ('literature'), ('negative'), ('occupations'), ('people'), ('positive'), ('relationships'), ('school'),
('shopping'), ('size'), ('sports'), ('traits'), ('transport'), ('weather'), ('work'), ('unclassified');

-- adding sentences
INSERT INTO sentences (jp_sentence, eng_sentence)
VALUES ('あなたは学生ですか？', 'Are you a student?'), ('僕の母は医者です。', 'My mum/mom is a doctor.'),
('その車はとても高いです！', 'That car is very expensive!'), ('鉛筆はどこですか？', 'Where is the pencil?'),
('この店でりんごが安いですね。', "The apples at this store are cheap, aren't they?"), ('おいしい寿司が好きです。', 'I like delicious sushi.'),
('今日は私の誕生日です。', 'Today is my birthday.');

-- adding words
INSERT INTO words (kanji, hiragana, katakana, romanji, class_id, sentence_id)
VALUES ('学生', 'がくせい', 'N/A', 'gakusei', 2, 1), ('N/A', 'あなた', 'N/A', 'anata', 1, 1), ('医者', 'いしゃ', 'N/A', 'isha', 2, 2),
('車', 'くるま', 'N/A', 'kuruma', 2, 3), ('高い', 'たかい', 'N/A', 'takai', 3, 3), ('鉛筆', 'えんぴつ', 'N/A', 'enpitsu', 2, 4),
('安い', 'やすい', 'N/A', 'yasui', 3, 5), ('寿司', 'すし', 'N/A', 'sushi', 2, 6), ('N/A', 'おいしい', 'N/A', 'oishii', 3, 6),
('今日', 'きょう', 'N/A', 'kyou', 2, 7);

INSERT INTO meanings (english)
VALUES ('student'), ('you'), ('doctor'), ('car'), ('tall'), ('expensive'), ('pencil'), ('cheap'), ('sushi'), ('delicious/tasty'), ('today');

INSERT INTO word_meanings
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (5,6), (6, 7), (7, 8), (8, 9), (9, 10), (10, 11);