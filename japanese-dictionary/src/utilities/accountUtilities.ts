import "../style.scss";

//CAPTURING DOM ELEMENTS//

//FORM BUTTONS//
const loginFormBtn = document.querySelector<HTMLButtonElement>("#loginFormBtn");
const signupFormBtn = document.querySelector<HTMLButtonElement>("#signupFormBtn");

//FORM INPUTS//
const usernameInput = document.querySelector<HTMLInputElement>("#usernameInput");
const passwordInput = document.querySelector<HTMLInputElement>("#passwordInput");

//SUBMIT BUTTONS//
const loginBtn = document.querySelector<HTMLButtonElement>("#loginBtn");
const signupBtn = document.querySelector<HTMLButtonElement>("#signupBtn");

if (
	!loginFormBtn ||
	!signupFormBtn ||
	!usernameInput ||
	!passwordInput ||
	!loginBtn ||
	!signupBtn
) {
	throw new Error("Some elements could not be found.");
}

//METHODS//

//EVENT HANDLERS//
const handleLoginFormBtnOnClick = () => {
	loginBtn.style.display = "initial";
	signupBtn.style.display = "none";
};

const handleSingupFormBtnOnClick = () => {
	loginBtn.style.display = "none";
	signupBtn.style.display = "initial";
};

//EVENT LISTENERS//
loginFormBtn.addEventListener("click", handleLoginFormBtnOnClick);
signupFormBtn.addEventListener("click", handleSingupFormBtnOnClick);
