// This is example to read .env file in nodejs
// Usage: node --env-file=.env.local index.js

/**
 * Fetches github user data by username
 * @param {string} username Your github username
 * @returns {Promise<unknown>} Promise object represents the user data
 */
async function fetchGithubUser(username) {
	if (!username) {
		console.error("Please provide a username");
		return;
	}

	const response = await fetch(`https://api.github.com/users/${username}`);
	const user = await response.json();
	return user;
}

const user = await fetchGithubUser(process.env.GITHUB_USERNAME);
// __AUTO_GENERATED_PRINT_VAR_START__
console.log("user: %s", user); // __AUTO_GENERATED_PRINT_VAR_END__
