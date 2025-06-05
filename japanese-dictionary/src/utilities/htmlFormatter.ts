import type { Word } from "../wordObject";

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
							<p class="sentence sentence--jp">${word.sentences.jpSentence}</p>
							<p class="sentence sentence--eng">${word.sentences.engSentence}</p>
						</div>
						<div class="word-info-container">
							<p class="word-info-container__text">Word class: ${word.wordClass}</p>
							<p class="word-info-container__text">Category: ${word.categories}</p>
						</div>
					</div>
				</section>`;
};

const getNonKanjiResultContainerHTML = (word: Word): string => {
	return `<section class="result-container">
					<button class="btn btn--bookmark">
						<i class="material-icons btn--bookmark-icon">indeterminate_check_box</i>
					</button>
					<div class="bookmark bookmark--hide">
						<i class="material-icons bookmark--icon">bookmark</i>
					</div>
					<div class="word-container">
						<p class="word-container__main-word">${word.hiragana}</p>
						<div class="word-container__roma-meaning">
							<p class="romanji romanji--big">${word.romanji}</p>
							<p class="word-container__meaning">${word.meanings}</p>
						</div>
						<div class="stacked-container">
							<p class="sentence sentence--jp">${word.sentences.jpSentence}</p>
							<p class="sentence sentence--eng">${word.sentences.engSentence}</p>
						</div>
						<div class="word-info-container">
							<p class="word-info-container__text">Word class: ${word.wordClass}</p>
							<p class="word-info-container__text">Category: ${word.categories}</p>
						</div>
					</div>
				</section>`;
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
