import "./style.scss";
import type { Word, User, BookmarkedWord } from "./wordObject";
import {
	getAllWords,
	getAllClasses,
	getAllCategories,
	getWordBySearch,
	getWordByClass,
	getWordByCategory,
	getWordByFilters,
	getBookmarkedWords,
} from "./utilities/fetchAPI";
import {
	createHTMLString,
	createClassFilterHtmlString,
	createCategoryFilterHtmlString,
} from "./utilities/htmlFormatter";
import { clearInputFields } from "./utilities/accountUtilities";

//CAPTURING DOM ELEMENTS//

//NAVIGATION BUTTONS//
const homeBtn = document.querySelector<HTMLButtonElement>("#home");
const infoBtn = document.querySelector<HTMLButtonElement>("#info");
const listBookmarksBtn = document.querySelector<HTMLButtonElement>("#bookmarks");
const accountBtn = document.querySelector<HTMLButtonElement>("#accounts");

//ACCOUNT//
const userInfo = document.querySelector<HTMLDivElement>("#userAccount");

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

//PAGE SECTION ELEMENTS//
const mainPage = document.querySelector<HTMLDivElement>("#mainPage");
const accountSection = document.querySelector<HTMLDivElement>("#accountSection");

if (
	!homeBtn ||
	!infoBtn ||
	!listBookmarksBtn ||
	!accountBtn ||
	!userInfo ||
	!userSearch ||
	!searchBtn ||
	!resultInfo ||
	!wordClassDropDown ||
	!categoryDropDown ||
	!clearFilterBtn ||
	!resultContainer ||
	!mainPage ||
	!accountSection
) {
	throw new Error("Some elements could not be found.");
}

//GLOBAL//
let bookmarkedWordsList: Word[] = [];

//METHODS//

//EVENT METHODS//
const handleFilterClearBtnOnClick = () => {
	displayAllWords();
};

const handleDropDownOnChange = () => {
	//Get the current value of both dropdowns
	const classId = wordClassDropDown.value;
	const categoryId = categoryDropDown.value;
	if (classId != "") {
		if (categoryId != "") {
			displayWordsByClassAndCategory(Number(classId), Number(categoryId));
		} else {
			displayWordsByClass(Number(classId));
		}
	} else if (categoryId != "") {
		displayWordsByCategory(Number(categoryId));
	} else {
		displayAllWords();
	}
};

const handleSearchBtnOnClick = () => {
	const searchTerm = userSearch.value;
	if (searchTerm != "") {
		displayWordsBySearch(searchTerm);
	} else {
		displayAllWords();
	}
};

const handleAccountBtnOnClick = () => {
	if (accountBtn.innerText === "SIGN OUT") {
		window.location.replace("index.html");
	} else {
		accountSection.style.display = "initial";
		mainPage.style.display = "none";
		clearInputFields();
	}
};

const handleHomeBtnOnClick = () => {
	mainPage.style.display = "initial";
	accountSection.style.display = "none";
	configurePage();
};

const handleBookmarkBtnOnClick = () => {
	const userId = getUserId();
	if (userId === 0) {
		alert("Please login or create an account to view bookmarks.");
	} else {
		displayBookmarkedWords(userId);
	}
};

//EVENT HANDLERS//
clearFilterBtn.addEventListener("click", handleFilterClearBtnOnClick);
wordClassDropDown.addEventListener("change", handleDropDownOnChange);
categoryDropDown.addEventListener("change", handleDropDownOnChange);
searchBtn.addEventListener("click", handleSearchBtnOnClick);
accountBtn.addEventListener("click", handleAccountBtnOnClick);
homeBtn.addEventListener("click", handleHomeBtnOnClick);
listBookmarksBtn.addEventListener("click", handleBookmarkBtnOnClick);

//CHECKING FOR BOOKMARKED WORDS//
const sortBookmarkedWords = (wordList: Word[]): BookmarkedWord[] => {
	const bookmarkList: BookmarkedWord[] = [];
	for (const word of wordList) {
		let isWordBookmarked = false;
		//CHECKING IF BOOKMARK LIST IS EMPTY//
		if (bookmarkedWordsList.length != 0) {
			for (const bookmark of bookmarkedWordsList) {
				if (word.id === bookmark.id) {
					isWordBookmarked = true;
				}
			}
		}
		bookmarkList.push({ ...word, isBookmarked: isWordBookmarked });
	}
	return bookmarkList;
};

//DISPLAYING WORDS ONTO PAGE//
const displayAllWords = async () => {
	const wordList = await getAllWords();
	displayResult(wordList);
};

const displayWordsBySearch = async (searchTerm: string) => {
	const wordList = await getWordBySearch(searchTerm);
	displayResult(wordList);
};

const displayWordsByClass = async (classId: number) => {
	const wordList = await getWordByClass(classId);
	displayResult(wordList);
};

const displayWordsByCategory = async (categoryId: number) => {
	const wordList = await getWordByCategory(categoryId);
	displayResult(wordList);
};

const displayWordsByClassAndCategory = async (classId: number, categoryId: number) => {
	const wordList = await getWordByFilters(classId, categoryId);
	displayResult(wordList);
};

const displayBookmarkedWords = async (userId: number) => {
	const wordList = await getBookmarkedWords(userId);
	displayResult(wordList);
};

//GETTING FILTER VALUES//
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

//GETTING USER BOOKMARKS//
export const getUserBookmarks = async () => {
	bookmarkedWordsList = await getBookmarkedWords(getUserId());
};

//INSERTING HTML//
export const displayResult = (wordList: Word[]) => {
	const htmlString = createHTMLString(sortBookmarkedWords(wordList));
	resultContainer.innerHTML = htmlString;
};

const displayWordClassFilters = (htmlString: string) => {
	wordClassDropDown.innerHTML = htmlString;
};

const displayCategoryFilters = (htmlString: string) => {
	categoryDropDown.innerHTML = htmlString;
};

//USER DISPLAY//
export const displayUser = (user: User) => {
	userInfo.innerText = `Hello, ${user.username}!`;
	userInfo.setAttribute("data-user", user.id.toString());
	accountBtn.innerText = "SIGN OUT";
	getUserBookmarks();
};

//GETTING USER ID//
export const getUserId = (): number => {
	return Number(userInfo.getAttribute("data-user"));
};

//CONFIGURING PAGE//
const configurePage = () => {
	displayAllWords();
	getClassFilterOptions();
	getCategoryFilterOptions();
};

configurePage();
