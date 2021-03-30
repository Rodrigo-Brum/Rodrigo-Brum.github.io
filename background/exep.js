let phrase = "Programming is not something from another planet, but programmers are!"
let author = "Rodrigo Brum"

let quote = class Quote {
	constructor(phrase, author) {
		this.phrase = phrase;
		this.author = author;
	}

	get quote() {
		return toString();
	}

	toString() {
		return phrase + "\nAuthor: " + author;
	}

}

console.log(quote(phrase, author));