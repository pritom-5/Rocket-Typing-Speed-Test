import {
	retryBtn,
	retryModal,
	typeTestInfo,
	addToLeaderboardBtn,
	usernameSubmitSection,
} from "./selectors.js";
import { postData } from "./utils.js";

let WPM;
let WORDSCOUNT;
let TIME;

export default function retryModalToggle() {
	const isModalOpen = retryModal.open;

	if (isModalOpen) {
		retryModal.close();
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

// on addToLeaderboardBtn click new input field and button open
// input field -> username
// big submit button on this click { username, wpm, date, time } should be submitted to the backend

async function getUsernameOnSubmit(usernameInput) {
	const usernameInputValue = usernameInput.value;

	if (usernameInputValue.trim().length === 0) return;

	const userInfoObj = {
		username: usernameInputValue,
		wpm: WPM,
		wordscount: WORDSCOUNT,
		time: TIME,
	};

	const responseData = await postData(userInfoObj, "/postUserInfo");

	// TODO:
	// add some notification to show the data is added to the global board

	console.log(responseData);
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
