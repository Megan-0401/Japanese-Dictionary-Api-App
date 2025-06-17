//CREATING ELEMENTS//
const title = document.createElement("h1");
title.innerText = "Welcome!";

const subtitleSearch = document.createElement("h2");
subtitleSearch.innerText = "Searching";

const subtitleFilter = document.createElement("h2");
subtitleFilter.innerText = "Filtering";

const subtitleBookmark = document.createElement("h2");
subtitleBookmark.innerText = "Bookmarks";

const subtitleAccount = document.createElement("h2");
subtitleAccount.innerText = "Account";

const paraWelcome = document.createElement("p");
paraWelcome.innerText =
	"Easy JP is a Japanese to English dictionary, designed to help users who are learning Japanese to keep track of their vocabulary.\n\n" +
	"If you need any help, or want more infomation on the site's features, you're in the right place!";
paraWelcome.setAttribute("class", "info-para");

const paraSearch = document.createElement("div");
paraSearch.innerHTML =
	`<p>The search bar takes any search term including: English, Romanji, Kanji, Hiragana or Katakana.</p>\n\n` +
	`<p>The page will display any word that contains the search term:</p>\n` +
	`<ul><li>E.g. searching "car" will return you any words that contain the term "car" in the english or romanji.</li>` +
	`<li>E.g. searching "a" will return you any words that contain the term "a" in the english or romanji.</li>` +
	`<li>E.g. searching "あ" will return you any words that contain the term "あ" in the hiragana.</li></ul>`;
paraSearch.setAttribute("class", "info-para");

const paraFilter = document.createElement("p");
paraFilter.innerText =
	`The word class and category filters can either be used together or individually.\n\n` +
	`Both filters can be cleared with the 'CLEAR' button on the right of the filters, or by manually changing the value in the drop-down box back to 'Select...'\n\n` +
	`NOTE: It is not possible to use the search and filter function together. Using one will override the other.`;
paraFilter.setAttribute("class", "info-para");

const paraBookmark = document.createElement("p");
paraBookmark.innerText =
	`Bookmarks are a handy way to save words you wish to review.\n\n` +
	`You'll see any words you've bookmarked with an icon beside them. You can also view all your bookmarks using the 'BOOKMARKS' button in the navigation bar.\n\n` +
	`Bookmarks can be created with an account.`;
paraBookmark.setAttribute("class", "info-para");

const paraAccount = document.createElement("p");
paraAccount.innerText =
	`Accounts are used to save bookmarks.\n\n` +
	`You just need a username and password to sign up. You are then free to login anytime you'd like!\n\n` +
	`NOTE: The account function uses a psuedo-login system. If the page is closed or refreshed while logged in, you will be logged out and will have to sign in again.`;
paraAccount.setAttribute("class", "info-para");

//INSERTING ELEMENTS//
export const insertInfoPageElements = (infoDiv: HTMLDivElement) => {
	infoDiv.append(title);
	infoDiv.append(paraWelcome);
	infoDiv.append(subtitleSearch);
	infoDiv.append(paraSearch);
	infoDiv.append(subtitleFilter);
	infoDiv.append(paraFilter);
	infoDiv.append(subtitleBookmark);
	infoDiv.append(paraBookmark);
	infoDiv.append(subtitleAccount);
	infoDiv.append(paraAccount);
};
