//POST NEW ACCOUNT//
export const postNewAccount = async (username: string, password: string): Promise<string> => {
	const response = await fetch(`http://localhost:8080/api/users/signup/${username},${password}`, {
		method: "POST",
	});

	switch (response.status) {
		case 400:
			return "Username already in use.";
		case 200:
			return "Account created successfully! Please login.";
		default:
			return "An error occured. Please try again.";
	}
};

//POST NEW BOOKMARK//
export const postNewBookmark = async (userId: number, wordId: number): Promise<boolean> => {
	const response = await fetch(`http://localhost:8080/api/bookmarks/add/${userId},${wordId}`, {
		method: "POST",
	});
	if (response.status === 201) {
		return true;
	} else {
		return false;
	}
};

//DELETE BOOKMARK//
export const deleteBookmark = async (userId: number, wordId: number): Promise<boolean> => {
	const response = await fetch(`http://localhost:8080/api/bookmarks/remove/${userId},${wordId}`, {
		method: "DELETE",
	});
	if (response.status === 200) {
		return true;
	} else {
		return false;
	}
};
