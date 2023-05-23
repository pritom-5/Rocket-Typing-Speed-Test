export default function getTodaysDateTime() {
	const date = new Date();

	const timeFormatted = date.toLocaleTimeString(); // 1:40:57 PM
	const dateFormatted = date.toLocaleDateString(); // 5/23/2023

	return { date: dateFormatted, clockTime: timeFormatted };
}
