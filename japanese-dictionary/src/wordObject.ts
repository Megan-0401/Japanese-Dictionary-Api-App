type Sentence = {
	jp_sentence: string;
	eng_sentence: string;
};

export type WordClass = {
	id: number;
	word_class: string;
};

export type Meanings = {
	english: string;
};

export type Categories = {
	id: number;
	category: string;
};

export type User = {
	id: number;
	username: string;
};

//RESPONSE//
export type WordResponse = {
	id: number;
	kanji: string;
	hiragana: string;
	katakana: string;
	romanji: string;
	word_class: WordClass;
	sentence: Sentence;
	meanings: Meanings[];
	categories: Categories[];
};

//WORD//
export type Word = {
	id: number;
	kanji: string;
	hiragana: string;
	katakana: string;
	romanji: string;
	wordClass: string;
	sentence: Sentence;
	meanings: string;
	categories: string;
};

export type BookmarkedWord = Word & { isBookmarked: boolean };
