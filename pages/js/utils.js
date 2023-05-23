import { body } from "./selectors.js";

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

	return Math.ceil(WPM);
}

export async function getRandomText() {
	const response = await fetch("/getRandomText");
	const data = await response.json();

	return data.text;
}

export async function postData(data, url) {
	const requestobj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	const response = await fetch(url, requestobj);
	const responseData = await response.json();

	return responseData;
}

export async function getData(url) {
	const response = await fetch(url);
	const responseData = await response.json();

	return responseData;
}

// type -> right / wrong / neutral
let timeout;
export function showNotification(header, type = "neutral") {
	const notificationMessage = `<h3>${header}</h3>`;

	const notificationElement = document.createElement("div");
	notificationElement.classList.add("notification_section");
	notificationElement.setAttribute("id", "notification_section");
	notificationElement.innerHTML = notificationMessage;

	body.appendChild(notificationElement);

	const notificationSection = document.querySelector("#notification_section");
	console.log(notificationSection.classList);

	timeout = setTimeout(() => {
		body.removeChild(notificationElement);
	}, 5000);
}
