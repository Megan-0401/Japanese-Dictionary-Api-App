type Sentence = {
	jp_sentence: string;
	eng_sentence: string;
};

export type WordClass = {
	word_class: string;
};

export type Meanings = {
	english: string;
};

export type Categories = {
	category: string;
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
	kanji: string;
	hiragana: string;
	katakana: string;
	romanji: string;
	wordClass: string;
	sentence: Sentence;
	meanings: string;
	categories: string;
};
