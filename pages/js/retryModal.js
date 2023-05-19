import { retryBtn, retryModal, typeTestInfo } from "./selectors.js";

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
}

retryBtn.addEventListener("click", retryModalToggle);

// <p>Total <span id="bold">${wordsCount}</span>words were typed in<span id="bold">${time} seconds</span>with speed of<span id="bold">${wpm} WPM</span></p>
