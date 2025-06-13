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

//SUBMIT BUTTON//
const submitBtn = document.querySelector<HTMLButtonElement>("#submitBtn");

//MESSAGE//
const message = document.querySelector<HTMLParagraphElement>("#message");

if (
	!loginFormBtn ||
	!signupFormBtn ||
	!formContainer ||
	!usernameInput ||
	!passwordInput ||
	!submitBtn ||
	!message
) {
	throw new Error("Some elements could not be found.");
}

//METHODS//

//EVENT HANDLERS//
const handleLoginFormBtnOnClick = () => {
	submitBtn.innerText = "LOG IN";
	message.style.display = "none";
};

const handleSingupFormBtnOnClick = () => {
	submitBtn.innerText = "SIGN UP";
	message.style.display = "none";
};

const handleSubmitBtnOnClick = () => {
	const username = usernameInput.value;
	const password = passwordInput.value;
	message.style.display = "none";
	if (submitBtn.innerText === "LOG IN") {
		loginUser(username, password);
	} else {
		validatePassword(username, password);
	}
};

//EVENT LISTENERS//
loginFormBtn.addEventListener("click", handleLoginFormBtnOnClick);
signupFormBtn.addEventListener("click", handleSingupFormBtnOnClick);
submitBtn.addEventListener("click", handleSubmitBtnOnClick);

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
