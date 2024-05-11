// This is example for fetch built-in function in NodeJS 18
async function fetchDogImage() {
	const response = await fetch("https://dog.ceo/api/breeds/image/random");
	const dog = await response.json();
	return dog;
}

const result = await fetchDogImage();
// __AUTO_GENERATED_PRINT_VAR_START__
console.log(" result: %o", result); // __AUTO_GENERATED_PRINT_VAR_END__
