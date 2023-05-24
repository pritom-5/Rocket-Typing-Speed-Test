import {
	globalLeaderboardBtn,
	leaderboardSection,
	todaysLeaderboardBtn,
} from "./selectors.js";
import { getData } from "./utils.js";

function makeTable(dataArr) {
	const makeTableRows = () => {
		let rows = "";
		dataArr.forEach((item) => {
			rows += `
					<tr>
						<td>${item.username}</td>
						<td>${item.wpm}</td>
						<td>${item.date}</td>
						<td>${item.clockTime}</td>
						<td>${item.wordscount}</td>
					</tr>
			`;
		});
		return rows;
	};
	const initialTable = `
			<div id="personal_leaderboard_table">
				<table>
					<tr>
						<th>username</th>
						<th>WPM</th>
						<th>date</th>
						<th>time</th>
						<th>words count</th>
					</tr>
					${makeTableRows()}
				</table>
			</div>
	`;
	return initialTable;
}

// toggle personal table
async function toggleGlobalTable() {
	// highlight todaysTableButton
	globalLeaderboardBtn.classList.toggle("highlighted_text");

	const globalTable = document.querySelector("#global_leaderboard_table");

	// check wheather the element is in the dom
	if (!globalTable) {
		const globalTableElement = document.createElement("div");
		globalTableElement.setAttribute("id", "global_leaderboard_table");

		const globalLeaderboardData = await getData("/api/getLeaderboard");
		const globalTableHtml = makeTable(
			globalLeaderboardData.leaderboardData
		);
		globalTableElement.innerHTML = globalTableHtml;

		leaderboardSection.appendChild(globalTableElement);
	} else {
		leaderboardSection.removeChild(globalTable);
	}
}
toggleGlobalTable();

// TODO:
// make todays leaderboard

async function toggeTodaysTable() {
	todaysLeaderboardBtn.classList.toggle("highlighted_text");

	const todaysTable = document.querySelector("#todays_leaderboard_table");

	// check wheather the element is in the dom
	if (!todaysTable) {
		const todaysTableElement = document.createElement("div");
		todaysTableElement.setAttribute("id", "todays_leaderboard_table");

		const todaysLeaderboardData = await getData("/api/getTodaysLeaderboard");
		const todaysTableHtml = makeTable(
			todaysLeaderboardData.leaderboardData
		);
		todaysTableElement.innerHTML = todaysTableHtml;

		leaderboardSection.appendChild(todaysTableElement);
	} else {
		leaderboardSection.removeChild(todaysTable);
	}
}

globalLeaderboardBtn.addEventListener("click", () => {
	toggleGlobalTable();
	toggeTodaysTable();
});
todaysLeaderboardBtn.addEventListener("click", () => {
	toggleGlobalTable();
	toggeTodaysTable();
});
