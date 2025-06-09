import "./style.scss";
import { getAllWords, getAllClasses, getAllCategories } from "./utilities/fetchAPI";
import {
	createHTMLString,
	createClassFilterHtmlString,
	createCategoryFilterHtmlString,
} from "./utilities/htmlFormatter";

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

//DISPLAYING DATABASE VALUES ON PAGE ELEMENTS//
const displayAllWords = async () => {
	const wordList = await getAllWords();
	const htmlString = createHTMLString(wordList);
	displayResult(htmlString);
};

const getClassFilterOptions = async () => {
	const classList = await getAllClasses();
	let htmlString = createClassFilterHtmlString(classList);
	displayWordClassFilters(htmlString);
};

const getCategoryFilterOptions = async () => {
	const categoryList = await getAllCategories();
	let htmlString = createCategoryFilterHtmlString(categoryList);
	displayCategoryFilters(htmlString);
};

//INSERTING HTML//
const displayResult = (htmlString: string) => {
	resultContainer.innerHTML = htmlString;
};

const displayWordClassFilters = (htmlString: string) => {
	wordClassDropDown.innerHTML = htmlString;
};

const displayCategoryFilters = (htmlString: string) => {
	categoryDropDown.innerHTML = htmlString;
};

//CONFIGURING PAGE//
const configurePage = () => {
	displayAllWords();
	getClassFilterOptions();
	getCategoryFilterOptions();
};

configurePage();
