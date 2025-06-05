//SENTENCE OBJECT//
type Sentences = {
	jpSentence: string;
	engSentence: string;
};

//HIRAGANA/KATAKANA WORD//
export type Word = {
	hiragana: string;
	romanji: string;
	meanings: string[];
	sentences: Sentences;
	wordClass: string;
	categories: string[];
};

//KANJI WORD//
export type KanjiWord = Word & {
	kanji: string;
};
