// This is example for use task runner for run package.json script
// Usage: node --run start
import { createServer } from "node:http";

const server = createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello World!\n");
});

const PORT = process.env.PORT || 3456;
// starts a simple http server locally on port 3456
server.listen(PORT, "127.0.0.1", () => {
	console.log(`Listening on http://127.0.0.1:${PORT}`);
});
