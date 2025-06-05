import "./style.scss";
import type { Word } from "./wordObject";
import { getAllWords } from "./utilities/fetchAPI";

//CAPTURING DOM ELEMENTS//

//NAVIGATION BUTTONS//
const homeBtn = document.querySelector<HTMLButtonElement>("#home");
const infoBtn = document.querySelector<HTMLButtonElement>("#info");
const listBookmarksBtn = document.querySelector<HTMLButtonElement>("#bookmarks");
const accountBtn = document.querySelector<HTMLButtonElement>("#accounts");

//SEARCH ELEMENTS//
const userSearch = document.querySelector<HTMLInputElement>("#searchBar");
const searchBtn = document.querySelector<HTMLButtonElement>("#searchBtn");
const resultInfo = document.querySelector<HTMLDivElement>("#resultInfo");

//FILTER ELEMENTS//
const wordClassDropDown = document.querySelector<HTMLSelectElement>("#wordClass");
const categoryDropDown = document.querySelector<HTMLSelectElement>("#wordCategory");
const clearFilterBtn = document.querySelector<HTMLButtonElement>("#clearFiltersBtn");

//RESULTS ELEMENTS//
const resultContainer = document.querySelector<HTMLDivElement>("#results");

if (
	!homeBtn ||
	!infoBtn ||
	!listBookmarksBtn ||
	!accountBtn ||
	!userSearch ||
	!searchBtn ||
	!resultInfo ||
	!wordClassDropDown ||
	!categoryDropDown ||
	!clearFilterBtn ||
	!resultContainer
) {
	throw new Error("Some elements could not be found.");
}

//METHODS//

const fetchAllWords = (): Word[] => {
	return getAllWords() as unknown as Word[];
};

const displayResult = (htmlString: string) => {
	resultContainer.innerHTML = htmlString;
};
