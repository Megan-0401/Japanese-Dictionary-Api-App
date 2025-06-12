//POST NEW ACCOUNT//
export const postNewAccount = async (username: string, password: string): Promise<string> => {
	const response = await fetch(`http://localhost:8080/api//login/${username},${password}`, {
		method: "POST",
	});

	switch (response.status) {
		case 400:
			return "Username already in use.";
		case 200:
			return "Account created successfully. Please login.";
		default:
			return "An error occured. Please try again.";
	}
};
