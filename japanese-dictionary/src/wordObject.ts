type Sentence = {
	jpSentence: string;
	engSentence: string;
};

type WordClass = {
	wordClass: string;
};

type Meanings = {
	english: string;
};

type Categories = {
	category: string;
};

//RESPONSE//
export type WordResponse = {
	id: number;
	kanji: string;
	hiragana: string;
	katakana: string;
	romanji: string;
	wordClass: WordClass;
	sentences: Sentence;
	meanings: Meanings[];
	categories: Categories[];
};

//WORD//
export type Word = {
	kanji: string;
	hiragana: string;
	katakana: string;
	romanji: string;
	wordClass: string;
	sentences: Sentence;
	meanings: string;
	categories: string;
};
