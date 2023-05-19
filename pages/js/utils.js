let interval;
let clockCount = 0;

export function getClock(start) {
	if (!start) {
		clearInterval(interval);
		return clockCount;
	}

	// reset before starting
	clockCount = 0;
	interval = setInterval(() => {
		++clockCount;
	}, 1000);
}

export function countWPM(timeInSec, noOfWords) {
	const WPM = (60 / timeInSec) * noOfWords;
	console.log(`WPM: ${WPM}`);

	return WPM;
}
