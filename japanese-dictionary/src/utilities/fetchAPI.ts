import type { WordResponse, Word } from "../wordObject";

//GET ALL WORDS//
export const getAllWords = async () => {
	const response = await fetch("https://localhost:8080/api/words");
	const data: WordResponse[] = await response.json();
	return reformatData(data).then((value) => value);
};

const reformatData = async (wordData: WordResponse[]) => {
	return wordData.map((word) => {
		const wordClass = word.wordClass.wordClass;
		let meanings = "";
		word.meanings.forEach((meaning) => (meanings += meaning.english + " "));
		let categories = "";
		word.categories.forEach((category) => (categories += category.category + " "));
		return {
			kanji: word.kanji,
			hiragana: word.hiragana,
			katakana: word.katakana,
			romanji: word.romanji,
			wordClass: wordClass,
			sentences: word.sentences,
			meanings: meanings,
			categories: categories,
		} as Word;
	});
};
