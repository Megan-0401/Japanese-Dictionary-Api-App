import type { Word, WordClass, Categories } from "../wordObject";

const getKanjiResultContainerHTML = (word: Word): string => {
	return `<section class="result-container">
					<button class="btn btn--bookmark">
						<i class="material-icons btn--bookmark-icon">add_box</i>
					</button>
					<div class="bookmark bookmark--hide">
						<i class="material-icons bookmark--icon">bookmark</i>
					</div>
					<div class="word-container">
						<p class="word-container__main-word">${word.kanji}</p>
						<div class="word-container__roma-meaning">
							<div class="stacked-container">
								<p class="hiragana">${word.hiragana}</p>
								<p class="romanji romanji--small">${word.romanji}</p>
							</div>
							<p class="word-container__meaning">${word.meanings}</p>
						</div>
						<div class="stacked-container">
							<p class="sentence sentence--jp">${createSpanHtmlForJpSentence(
								word.kanji,
								word.sentence.jp_sentence
							)}</p>
							<p class="sentence sentence--eng"><i>${createSpanHtmlForEngSentence(
								word.meanings,
								word.sentence.eng_sentence
							)}</i></p>
						</div>
						<div class="word-info-container">
							<p class="word-info-container__text">Word class: <span class="dark-col">${word.wordClass}</span></p>
							<p class="word-info-container__text">Category: <span class="dark-col">${word.categories}</span></p>
						</div>
					</div>
				</section>`;
};

const getNonKanjiResultContainerHTML = (word: Word): string => {
	let mainWord = "";
	if (word.hiragana === "N/A") {
		mainWord = word.katakana;
	} else {
		mainWord = word.hiragana;
	}
	return `<section class="result-container">
					<button class="btn btn--bookmark">
						<i class="material-icons btn--bookmark-icon">add_box</i>
					</button>
					<div class="bookmark bookmark--hide">
						<i class="material-icons bookmark--icon">bookmark</i>
					</div>
					<div class="word-container">
						<p class="word-container__main-word">${mainWord}</p>
						<div class="word-container__roma-meaning">
							<p class="romanji romanji--big">${word.romanji}</p>
							<p class="word-container__meaning">${word.meanings}</p>
						</div>
						<div class="stacked-container">
							<p class="sentence sentence--jp">${createSpanHtmlForJpSentence(
								mainWord,
								word.sentence.jp_sentence
							)}</p>
							<p class="sentence sentence--eng"><i>${createSpanHtmlForEngSentence(
								word.meanings,
								word.sentence.eng_sentence
							)}</i></p>
						</div>
						<div class="word-info-container">
							<p class="word-info-container__text">Word class: <span class="dark-col">${word.wordClass}</span></p>
							<p class="word-info-container__text">Category: <span class="dark-col">${word.categories}</span></p>
						</div>
					</div>
				</section>`;
};

const getWordClassOptionHTML = (wordClass: WordClass) => {
	return `<option value="${wordClass.word_class}">${wordClass.word_class}</option>`;
};

const getCategoryOptionHTML = (category: Categories) => {
	return `<option value="${category.category}">${category.category}</option>`;
};

const createSpanHtmlForJpSentence = (word: string, sentence: string): string => {
	const spanHtml = `<span class="dark-teal-col">${word}</span>`;
	return sentence.replace(word, spanHtml);
};

const createSpanHtmlForEngSentence = (meanings: string, sentence: string): string => {
	//FOR MULTIPLE MEANINGS, FIND THE MEANING PRESENT IN THE SENTENCE
	const meaningsList = meanings.split(",");
	let wordInSentence = "";
	for (let i = 0; i < meaningsList.length; i++) {
		if (sentence.includes(meaningsList[i])) {
			wordInSentence = meaningsList[i];
			break;
		}
	}
	const spanHtml = `<span class="light-orange-col">${wordInSentence}</span>`;
	return sentence.replace(wordInSentence, spanHtml);
};

export const createHTMLString = (words: Word[]): string => {
	let concattedString = "";
	for (const word of words) {
		let string = "";
		if (word.kanji === "N/A") {
			string = getNonKanjiResultContainerHTML(word);
		} else {
			string = getKanjiResultContainerHTML(word);
		}
		concattedString += string;
	}
	return concattedString;
};

export const createClassFilterHtmlString = (classList: WordClass[]) => {
	let concattedString = `<option value="">Select...</option>`;
	for (const wordClass of classList) {
		concattedString += getWordClassOptionHTML(wordClass);
	}
	return concattedString;
};

export const createCategoryFilterHtmlString = (categoryList: Categories[]) => {
	let concattedString = `<option value="">Select...</option>`;
	for (const category of categoryList) {
		concattedString += getCategoryOptionHTML(category);
	}
	return concattedString;
};
