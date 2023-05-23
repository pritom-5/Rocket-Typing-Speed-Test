export default function getTodaysDateTime() {
	const date = new Date();

	const dateFormatted = date.toLocaleTimeString(); // 1:40:57 PM
	const timeFormatted = date.toLocaleDateString(); // 5/23/2023

	return { date: dateFormatted, clockTime: timeFormatted };
}
