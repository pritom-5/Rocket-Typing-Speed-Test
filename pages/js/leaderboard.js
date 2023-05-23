import { globalLeaderboardBtn, leaderboardSection } from "./selectors.js";
import { getData } from "./utils.js";

function makeGlobalTable(dataArr) {
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
	const globalTable = document.querySelector("#global_leaderboard_table");
	console.log(globalTable);

	globalLeaderboardBtn.classList.toggle("highlighted_text");

	// check wheather the element is in the dom
	if (!globalTable) {
		const globalTableElement = document.createElement("div");
		globalTableElement.setAttribute("id", "global_leaderboard_table");

		const globalLeaderboardData = await getData("/getLeaderboard");
		const globalTableHtml = makeGlobalTable(
			globalLeaderboardData.leaderboardData
		);
		globalTableElement.innerHTML = globalTableHtml;
		console.log(globalTableHtml);

		leaderboardSection.appendChild(globalTableElement);
	} else {
		leaderboardSection.removeChild(globalTable);
	}
}
toggleGlobalTable();

globalLeaderboardBtn.addEventListener("click", toggleGlobalTable);
