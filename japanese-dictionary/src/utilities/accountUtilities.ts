//CAPTURING DOM ELEMENTS//

//FORM BUTTONS//
const loginFormBtn = document.querySelector<HTMLButtonElement>("#loginFormBtn");
const signupFormBtn = document.querySelector<HTMLButtonElement>("#signupFormBtn");

//FORM INPUTS//
const usernameInput = document.querySelector<HTMLInputElement>("#username");
const passwordInput = document.querySelector<HTMLInputElement>("#password");

//SUBMIT BUTTONS//
const submitLoginBtn = document.querySelector<HTMLButtonElement>("submitLogin");
const submitSignupBtn = document.querySelector<HTMLButtonElement>("submitSignup");

if (
	!loginFormBtn ||
	!signupFormBtn ||
	!usernameInput ||
	!passwordInput ||
	!submitLoginBtn ||
	!submitSignupBtn
) {
	throw new Error("Some elements could not be found.");
}
