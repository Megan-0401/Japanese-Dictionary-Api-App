import "../style.scss";
import { postNewAccount } from "./postAPI";
import { getUserLogin } from "./fetchAPI";
import { displayUser } from "../main";

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

if (
	!loginFormBtn ||
	!signupFormBtn ||
	!formContainer ||
	!usernameInput ||
	!passwordInput ||
	!loginBtn ||
	!signupBtn
) {
	throw new Error("Some elements could not be found.");
}

//GLOBAL//
const message = document.createElement("p");

//METHODS//

//EVENT HANDLERS//
const handleLoginFormBtnOnClick = () => {
	loginBtn.style.display = "initial";
	signupBtn.style.display = "none";
	formContainer.removeChild(message);
};

const handleSingupFormBtnOnClick = () => {
	loginBtn.style.display = "none";
	signupBtn.style.display = "initial";
};

const handleSignUpBtnOnClick = () => {
	const username = usernameInput.value;
	const password = passwordInput.value;
	validatePassword(username, password);
};

const handleLoginBtnOnClick = () => {
	const username = usernameInput.value;
	const password = passwordInput.value;
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
		formContainer.appendChild(message);
	}
};

const createNewAccount = async (username: string, password: string) => {
	message.innerText = await postNewAccount(username, password);
	formContainer.appendChild(message);
};

//ACCOUNT LOGIN//

const loginUser = async (username: string, password: string) => {
	formContainer.removeChild(message);
	const user = await getUserLogin(username, password);
	switch (user.response_code) {
		case 200:
			displayUser(user);
			break;
		case 404:
			message.innerText = "User not found.";
			formContainer.appendChild(message);
			break;
		case 400:
			message.innerText = "Password is incorrect.";
			formContainer.appendChild(message);
			break;
		default:
			message.innerText = "An error occured. Please try again.";
			formContainer.appendChild(message);
			break;
	}
};
