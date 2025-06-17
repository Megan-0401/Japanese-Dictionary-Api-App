import { getUserId, getUserBookmarks } from "../main";
import { postNewBookmark, deleteBookmark } from "./post&deleteAPI";

//CAPTURING DOM ELEMENTS//
let bookmarkBtns = document.querySelectorAll<HTMLButtonElement>(".btn--bookmark");

if (!bookmarkBtns) {
	throw new Error("Some elements could not be found.");
}

//EVENT HANDLERS//
const handleBookmarkBtnOnClick = (event: Event) => {
	const targetBtn = event.currentTarget as HTMLButtonElement;
	if (targetBtn.getAttribute("data-bookmark-type") === "add") {
		addBookmark(targetBtn);
	} else {
		removeBookmark(targetBtn);
	}
};

//EVENT LISTNERS//
bookmarkBtns.forEach((button) => button.addEventListener("click", handleBookmarkBtnOnClick));

//METHODS//

export const recaptureBtns = () => {
	bookmarkBtns = document.querySelectorAll<HTMLButtonElement>(".btn--bookmark");
	bookmarkBtns.forEach((button) => button.addEventListener("click", handleBookmarkBtnOnClick));
};

const createBookmarkIconElement = (): HTMLDivElement => {
	const bookmarkIcon = document.createElement("div");
	bookmarkIcon.setAttribute("class", "bookmark");
	bookmarkIcon.innerHTML = `<i class="material-icons bookmark--icon">bookmark</i>`;
	return bookmarkIcon;
};

const addBookmark = (btn: HTMLButtonElement) => {
	//CHECK IF USER SIGNED IN//
	const userId = getUserId();
	if (userId === 0) {
		alert("Please login or create an account to create bookmarks.");
	} else {
		//SWAP BUTTON//
		btn.innerHTML = `<i class="material-icons btn--bookmark-icon">indeterminate_check_box</i>`;
		btn.setAttribute("data-bookmark-type", "remove");
		//POST BOOKMARK TO DATABASE//
		const wordId = btn.parentElement?.getAttribute("data-word-id");
		postBookmark(Number(wordId), userId);
		//ADD BOOKMARK ICON//
		const bookmarkIcon = createBookmarkIconElement();
		btn.after(bookmarkIcon);
	}
};

const removeBookmark = (btn: HTMLButtonElement) => {
	console.log("removing");
	//SWAP BUTTON//
	btn.innerHTML = `<i class="material-icons btn--bookmark-icon">add_box</i>`;
	btn.setAttribute("data-bookmark-type", "add");
	//DELETE BOOKMARK FROM DATABASE//
	const wordId = btn.parentElement?.getAttribute("data-word-id");
	deleteUserBookmark(Number(wordId), getUserId());
	//REMOVE BOOKMARK ICON//
	const bookmarkIcon = btn.nextElementSibling;
	bookmarkIcon?.remove();
};

const checkIfSuccessful = (response: boolean) => {
	if (response === false) {
		alert("Something went wrong. Please try again.");
	}
};

const postBookmark = async (wordId: number, userId: number) => {
	const response = await postNewBookmark(userId, wordId);
	checkIfSuccessful(response);
	getUserBookmarks();
};

const deleteUserBookmark = async (wordId: number, userId: number) => {
	const response = await deleteBookmark(userId, wordId);
	checkIfSuccessful(response);
	getUserBookmarks();
};
