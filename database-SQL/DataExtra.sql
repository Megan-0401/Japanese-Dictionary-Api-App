USE dictionary;

-- adding sentences
INSERT INTO sentences (jp_sentence, eng_sentence) VALUES 
('彼氏　は　日本人　です。', 'He is Japanese.'),
('明日　は　暑い　日　です。', 'It will be a hot day tomorrow.'),
('来週　の　土曜日　は　暇　です。', 'I will be free next Saturday.'),
('来週　難しい　試験　が　あります。', 'There is a difficult test next week.'),
('犬　は　とても　親切な　動物　です。', 'Dogs are very kind animals.'),
('子供たち　は　元気　で　明るい　です。', 'The children are lively and bright.'),
('仕事　の　後　で、　会社員　は　電車　に　登りました。', 'After work, the office worker got on the train.'),
('この　歌手　は　有名　で　ハンサム　です。', 'This singer is famous and handsome.'),
('病院　は　ここ　から　近い。', 'The hospital is near here.'),
('これ　は　美しい　山　です　ね。', "This is a beautiful mountain, isn't it?"),
('紙　に　ペン　で　書きました。', 'I wrote on the paper with a pen.'),
('静かな　部屋　で　眠る。', 'I sleep in a quiet room.'),
('jp', 'eng');

-- adding words
INSERT INTO words (kanji, hiragana, katakana, romanji, class_id, sentence_id) VALUES 
('日本人', 'にほんじん', 'N/A', 'nihonjin', 2, 8),
('暑い', 'あつい', 'N/A', 'atsui', 3, 9),
('明日', 'あした', 'N/A', 'ashita', 2, 9),
('土曜日', 'どようび', 'N/A', 'doyoubi', 2, 10),
('試験', 'しけん', 'N/A', 'shiken', 2, 11),
('難しい', 'むずかしい', 'N/A', 'muzukashi', 3, 11),
('親切', 'しんせつ', 'N/A', 'shinsetsu', 4, 12),
('元気', 'げんき', 'N/A', 'genki', 4, 13),
('会社員', 'かいしゃいん', 'N/A', 'kaishain', 2, 14),
('N/A', 'N/A', 'ハンサム', 'hansamu', 4, 15),
('N/A', 'ここ', 'N/A', 'koko', 2, 16),
('有名', 'ゆうめい', 'N/A', 'yuumei', 4, 15),
('N/A', 'これ', 'N/A', 'kore', 1, 17),
('N/A', 'N/A', 'ペン', 'pen', 2, 18),
('部屋', 'へや', 'N/A', 'heya', 2, 19),
('kanji', 'hiragana', 'katakana', 'romanji', 0, 0);

-- adding meanings
INSERT INTO meanings (english) VALUES 
('Japanese person'),
('hot'),
('tomorrow'),
('Saturday'),
('test'),
('exam'),
('difficult'),
('hard'),
('complicated'),
('kind'),
('lively'),
('healthy'),
('office worker'),
('handsome'),
('here'),
('famous'),
('this'),
('pen'),
('room'),
('meaning');

-- connecting words to meanings
INSERT INTO word_meanings (word_id, meaning_id) VALUES 
(11, 13),
(12, 14),
(13, 15),
(14, 16),
(15, 17),
(15, 18),
(16, 19),
(16, 20),
(16, 21),
(17, 22),
(18, 23),
(18, 24),
(19, 25),
(20, 26),
(21, 27),
(22, 28),
(23, 29),
(24, 30),
(25, 31),
(0, 0);

-- connecting words to categories
INSERT INTO word_categories (word_id, category_id) VALUES 
(11, 14),
(12, 24),
(13, 6),
(14, 6),
(15, 18),
(16, 12),
(17, 22),
(17, 15),
(18, 22),
(18, 15),
(19, 13),
(19, 25),
(20, 22),
(20, 15),
(21, 7),
(22, 22),
(23, 26),
(24, 5),
(25, 2),
(0, 0);