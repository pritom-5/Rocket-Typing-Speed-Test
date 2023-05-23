import retryModalToggle, { setDynamicDataToModal } from "./retryModal.js";
import {
	startBtn,
	highlightedTextDisplay,
	wordInput,
	textDisplay,
	resetBtn,
} from "./selectors.js";
import { countWPM, getClock, getRandomText } from "./utils.js";

export function toggleInputAndStartBtn() {
	wordInput.disabled = !wordInput.disabled;
	startBtn.disabled = !startBtn.disabled;
}

startBtn.addEventListener("click", () => {
	toggleInputAndStartBtn();
	wordInput.focus();
	// start clock
	getClock(true);
});

resetBtn.addEventListener("click", () => {
	resetPracticeSession();
});

// split practiceText into array items
// this array is for initial dom
let practiceTextArr = [];
let practiceTextArr_copy = [];
let highlightedTextArr = [];

let currentWord = 0;

async function resetPracticeSession() {
	currentWord = 0;
	const practiceText = await getRandomText();

	practiceTextArr = practiceText.split(" ").map((word, index, arr) => {
		if (index === arr.length - 1) return `${word}`;
		return `${word} `;
	});
	// later this array is edited
	practiceTextArr_copy = [...practiceTextArr];
	highlightedTextArr = [];

	textDisplay.innerText = practiceText;
	highlightedTextDisplay.innerText = "";
}
resetPracticeSession();

function setHighlightedText() {
	// remove highlighted portion from practiceTextArr
	// add highlighted portion from practiceTextArr
	const splicedWord = practiceTextArr_copy.splice(0, 1);
	highlightedTextArr.push(splicedWord);

	if (practiceTextArr_copy.length === 0) {
		toggleInputAndStartBtn();
		// stop clock
		const timeElapsed = getClock(false);
		const totalWords = practiceTextArr.length;
		// count rpm
		const WPM = countWPM(timeElapsed, totalWords);
		// show additional dynamic data to modal
		setDynamicDataToModal(timeElapsed, WPM, totalWords);
		// show retrymodal
		retryModalToggle();
		resetPracticeSession();
	}

	textDisplay.innerText = practiceTextArr_copy.join("");
	highlightedTextDisplay.innerText = highlightedTextArr.join("");
}

wordInput.addEventListener("keyup", () => {
	const inputText = wordInput.value;

	if (inputText === practiceTextArr[currentWord]) {
		++currentWord;

		wordInput.value = "";
		setHighlightedText();
	}
});
