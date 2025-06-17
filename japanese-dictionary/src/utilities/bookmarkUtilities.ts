import { getUserId, getUserBookmarks } from "../main";

//CAPTURING DOM ELEMENTS//
const bookmarkBtns = document.querySelectorAll<HTMLButtonElement>(".btn--bookmark");
const bookmarkIcons = document.querySelectorAll<HTMLDivElement>(".bookmark");

if (!bookmarkBtns || !bookmarkIcons) {
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
		getUserBookmarks();
		//ADD BOOKMARK ICON//
		const bookmarkIcon = createBookmarkIconElement;
		btn.after(bookmarkIcon());
	}
};

const removeBookmark = (btn: HTMLButtonElement) => {
	//SWAP BUTTON//
	btn.innerHTML = `<i class="material-icons btn--bookmark-icon">add_box</i>`;
	btn.setAttribute("data-bookmark-type", "add");
	//DELETE BOOKMARK FROM DATABASE//
	const wordId = btn.parentElement?.getAttribute("data-word-id");
	deleteBookmark(Number(wordId), getUserId());
	getUserBookmarks();
	//REMOVE BOOKMARK ICON//
	const bookmarkIcon = btn.nextSibling;
	if (bookmarkIcon) {
		bookmarkIcon.remove();
	}
};

const postBookmark = async (wordId: number, userId: number) => {
	console.log(wordId, userId);
};

const deleteBookmark = async (wordId: number, userId: number) => {
	console.log(wordId, userId);
};
