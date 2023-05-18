const textDisplay = document.querySelector("#text_display");
const highlightedTextDisplay = document.querySelector("#highlighted_text");
const wordInput = document.querySelector("#word_input");

const practiceText = "this is the extended version of the words to practice";

textDisplay.innerText = practiceText;
highlightedTextDisplay.innerText = "";

const practiceTextArr = practiceText.split(" ").map((word, index, arr) => {
	if (index === arr.length - 1) return word;
	return `${word} `;
});
const practiceTextArr_copy = [...practiceTextArr];
const highlightedTextArr = [];

console.log(practiceTextArr);

let currentWord = 0;

function setHighlightedText() {
	// remove highlighted portion from practiceTextArr
	const splicedWord = practiceTextArr_copy.splice(0, 1);
	highlightedTextArr.push(splicedWord);
	// add highlighted portion from practiceTextArr
	textDisplay.innerText = practiceTextArr_copy.join("");
	highlightedTextDisplay.innerText = highlightedTextArr.join("");
}

wordInput.addEventListener("keyup", () => {
	const inputText = wordInput.value;

	// if (practiceTextArr[currentWord].startsWith(inputText)) {
	// 	console.log("yes");
	// } else {
	// 	console.log('no')
	// }

	if (inputText === practiceTextArr[currentWord]) {
		++currentWord;
		wordInput.value = "";
		setHighlightedText();
	}

	console.log(inputText);
});
