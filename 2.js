function usernameCheck(username) {
	const regexUser = /^[@][a-z]{2,12}$/;
	console.log(`${username}: ${regexUser.test(username)}`);
}

function passwordCheck(pass) {
    const regexPass = /^[0-9]{6}$/;
    console.log(`${pass}: ${regexPass.test(pass)}`);
}

usernameCheck("@koders");
usernameCheck("@programmerhandal");
passwordCheck("212223");
passwordCheck("2!2a3B");