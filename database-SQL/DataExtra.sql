USE dictionary;

-- adding sentences
INSERT INTO sentences (jp_sentence, eng_sentence) VALUES 
('彼氏　は　日本人　です。', 'He is Japanese.'),
('明日　は　暑い　日　です。', 'It will be a hot day tomorrow.'),
('来週　の　土曜日　は　暇　です。', 'I will be free next Saturday.'),
('来週　難しい　試験　が　あります。', 'There is a difficult test next week.'),
('jp', 'eng');

-- adding words
INSERT INTO words (kanji, hiragana, katakana, romanji, class_id, sentence_id) VALUES 
('日本人', 'にほんじん', 'N/A', 'nihonjin', 2, 8),
('暑い', 'あつい', 'N/A', 'atsui', 3, 9),
('明日', 'あした', 'N/A', 'ashita', 2, 9),
('土曜日', 'どようび', 'N/A', 'doyoubi', 2, 10),
('試験', 'しけん', 'N/A', 'shiken', 2, 11),
('kanji', 'hiragana', 'katakana', 'romanji', 0, 0);

-- adding meanings
INSERT INTO meanings (english) VALUES 
('Japanese person'),
('hot'),
('tomorrow'),
('Saturday'),
('test'),
('exam'),
('meaning');

-- connecting words to meanings
INSERT INTO word_meanings (word_id, meaning_id) VALUES 
(11, 13),
(12, 14),
(13, 15),
(14, 16),
(15, 17),
(15, 18),
(0, 0);

-- connecting words to categories
INSERT INTO word_categories (word_id, category_id) VALUES 
(11, 14),
(12, 24),
(13, 6),
(14, 6),
(15, 18),
(0, 0);