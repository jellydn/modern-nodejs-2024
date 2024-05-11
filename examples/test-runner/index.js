/**
 * Validate email address if that is valid.
 * @param {string} email
 * @returns {boolean} Return true if email is valid, otherwise return false.
 */
function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export { validateEmail };
