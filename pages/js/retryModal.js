import {
	retryBtn,
	retryModal,
	typeTestInfo,
	addToLeaderboardBtn,
	usernameSubmitSection,
	startBtn,
} from "./selectors.js";
import { postData, showNotification } from "./utils.js";

let WPM;
let WORDSCOUNT;
let TIME;

export default function retryModalToggle() {
	const isModalOpen = retryModal.open;

	if (isModalOpen) {
		retryModal.close();
		startBtn.focus();
	} else {
		retryModal.showModal();
	}
}

// TODO. add modal info dynamically
export function setDynamicDataToModal(time, wpm, wordsCount) {
	typeTestInfo.innerHTML = `<p>Total <span class="bold"> ${wordsCount} </span>words were typed in<span class="bold"> ${time} seconds </span>with speed of<span class="bold"> ${wpm} WPM </span></p>
`;

	WPM = wpm;
	WORDSCOUNT = wordsCount;
	TIME = time;
}

retryBtn.addEventListener("click", retryModalToggle);

async function getUsernameOnSubmit(usernameInput) {
	const usernameInputValue = usernameInput.value;

	if (usernameInputValue.trim().length === 0) return;

	const userInfoObj = {
		username: usernameInputValue,
		wpm: WPM,
		wordscount: WORDSCOUNT,
		time: TIME,
	};

	const responseData = await postData(userInfoObj, "/api/postUserInfo");

	let type;
	if (responseData.status !== 200) {
		type = "wrong";
	} else {
		type = "right";
	}

	showNotification(responseData.message, type);

	// close dialog
	retryModalToggle();
}

function showAdditionalInputFieldInModal() {
	const usernameSubmitSectionHtml = `<div id="username_input_section">
						<input
							id="username_input"
							type="text"
							name="username"
							minLength="3"
	placeholder="valid username is required"
						/>
					</div>
					<button id="userinfo_submit_btn">submit</button>
	`;
	usernameSubmitSection.innerHTML = usernameSubmitSectionHtml;
	const usernameInput = document.querySelector("#username_input");
	const userinfoSubmitBtn = document.querySelector("#userinfo_submit_btn");

	usernameInput.focus();

	userinfoSubmitBtn.addEventListener("click", () =>
		getUsernameOnSubmit(usernameInput)
	);
}

addToLeaderboardBtn.addEventListener("click", showAdditionalInputFieldInModal);
