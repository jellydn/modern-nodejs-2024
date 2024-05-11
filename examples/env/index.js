// This is example to read .env file in nodejs
// Usage: node --env-file=.env.local index.js

async function fetchGithubUser(username) {
	// __AUTO_GENERATED_PRINT_VAR_START__
	console.log("fetchGithubUser username: %s", username); // __AUTO_GENERATED_PRINT_VAR_END__
	const response = await fetch(`https://api.github.com/users/${username}`);
	const user = await response.json();
	return user;
}

const user = await fetchGithubUser(process.env.GITHUB_USERNAME);
// __AUTO_GENERATED_PRINT_VAR_START__
console.log(" user: %s", user); // __AUTO_GENERATED_PRINT_VAR_END__
