import type { WordResponse, Word, Meanings, Categories, WordClass } from "../wordObject";

//GET ALL WORDS//
export const getAllWords = async () => {
	const response = await fetch("http://localhost:8080/api/words");
	const data: WordResponse[] = await response.json();
	return reformatWordData(data);
};

//GET ALL WORD CLASSES//
export const getAllClasses = async () => {
	const response = await fetch("http://localhost:8080/api/wordclass");
	const data: WordClass[] = await response.json();
	return data;
};

//GET ALL CATEGORIES//
export const getAllCategories = async () => {
	const response = await fetch("http://localhost:8080/api/categories");
	const data: Categories[] = await response.json();
	return data;
};

const reformatWordData = (wordData: WordResponse[]) => {
	return wordData.map((word) => {
		return {
			kanji: word.kanji,
			hiragana: word.hiragana,
			katakana: word.katakana,
			romanji: word.romanji,
			wordClass: word.word_class.word_class,
			sentence: word.sentence,
			meanings: createMeaningList(word.meanings),
			categories: createCategoryList(word.categories),
		} as Word;
	});
};

const createMeaningList = (arrayList: Meanings[]): string => {
	if (arrayList.length === 1) {
		return arrayList[0].english;
	}
	let string = "";
	const lastIndexValue = arrayList.length - 1;
	for (let i = 0; i < lastIndexValue; i++) {
		string += arrayList[i].english + ", ";
	}
	string += arrayList[lastIndexValue].english;
	return string;
};

const createCategoryList = (arrayList: Categories[]): string => {
	if (arrayList.length === 1) {
		return arrayList[0].category;
	}
	let string = "";
	const lastIndexValue = arrayList.length - 1;
	for (let i = 0; i < lastIndexValue; i++) {
		string += arrayList[i].category + ", ";
	}
	string += arrayList[lastIndexValue].category;
	return string;
};
