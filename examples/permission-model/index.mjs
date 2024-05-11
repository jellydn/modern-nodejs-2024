// This is example for permission model for access file system with fs module
// Usage: node --experimental-permission index.mjs
import fs from "node:fs";

// Read index.js file content and print it to console
fs.readFile("index.mjs", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(data.toUpperCase());
});
