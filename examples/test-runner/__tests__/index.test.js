// Usage: node --test
import { describe, it } from "node:test";
import assert from "node:assert";

import { validateEmail } from "../index.js";

describe("validateEmail", () => {
	it("should return true if email is valid", () => {
		assert.strictEqual(validateEmail("dung@productsway.com"), true);
	});

	it("should return false if email is invalid", () => {
		assert.strictEqual(validateEmail("dung@productsway"), false);
	});
});
