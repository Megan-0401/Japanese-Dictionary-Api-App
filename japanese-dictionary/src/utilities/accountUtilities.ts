import "../style.scss";
import { postNewAccount } from "./postAPI";
import { getLoginResponseCode } from "./fetchAPI";

//CAPTURING DOM ELEMENTS//

//FORM BUTTONS//
const loginFormBtn = document.querySelector<HTMLButtonElement>("#loginFormBtn");
const signupFormBtn = document.querySelector<HTMLButtonElement>("#signupFormBtn");

//FORM//
const formContainer = document.querySelector<HTMLDivElement>(".form-container__input");

//FORM INPUTS//
const usernameInput = document.querySelector<HTMLInputElement>("#usernameInput");
const passwordInput = document.querySelector<HTMLInputElement>("#passwordInput");

//SUBMIT BUTTONS//
const loginBtn = document.querySelector<HTMLButtonElement>("#loginBtn");
const signupBtn = document.querySelector<HTMLButtonElement>("#signupBtn");

//MESSAGE//
const message = document.querySelector<HTMLParagraphElement>("#message");

if (
	!loginFormBtn ||
	!signupFormBtn ||
	!formContainer ||
	!usernameInput ||
	!passwordInput ||
	!loginBtn ||
	!signupBtn ||
	!message
) {
	throw new Error("Some elements could not be found.");
}

//METHODS//

//EVENT HANDLERS//
const handleLoginFormBtnOnClick = () => {
	loginBtn.style.display = "initial";
	signupBtn.style.display = "none";
	message.style.display = "none";
};

const handleSingupFormBtnOnClick = () => {
	loginBtn.style.display = "none";
	signupBtn.style.display = "initial";
	message.style.display = "none";
};

const handleSignUpBtnOnClick = () => {
	const username = usernameInput.value;
	const password = passwordInput.value;
	message.style.display = "none";
	validatePassword(username, password);
};

const handleLoginBtnOnClick = () => {
	const username = usernameInput.value;
	const password = passwordInput.value;
	message.style.display = "none";
	loginUser(username, password);
};

//EVENT LISTENERS//
loginFormBtn.addEventListener("click", handleLoginFormBtnOnClick);
signupFormBtn.addEventListener("click", handleSingupFormBtnOnClick);
signupBtn.addEventListener("click", handleSignUpBtnOnClick);
loginBtn.addEventListener("click", handleLoginBtnOnClick);

//ACCOUNT CREATION//

const validatePassword = (username: string, password: string) => {
	if (password.length >= 8) {
		createNewAccount(username, password);
	} else {
		message.innerText = "Password length must be 8 characters minimum.";
		message.style.display = "initial";
	}
};

const createNewAccount = async (username: string, password: string) => {
	message.innerText = await postNewAccount(username, password);
};

//ACCOUNT LOGIN//

const loginUser = async (username: string, password: string) => {
	const statusCode = await getLoginResponseCode(username, password);
	switch (statusCode) {
		case 200:
			window.location.replace("index.html");
			break;
		case 404:
			message.innerText = "User not found.";
			message.style.display = "initial";
			break;
		case 400:
			message.innerText = "Password is incorrect.";
			message.style.display = "initial";
			break;
		default:
			message.innerText = "An error occured. Please try again.";
			message.style.display = "initial";
			break;
	}
};
