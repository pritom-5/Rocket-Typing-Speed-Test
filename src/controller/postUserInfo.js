import getTodaysDateTime from "../utils/getTodaysDateTime.js";
import readFile from "../utils/readFile.js";
import writeFile from "../utils/writeFile.js";
import asyncHandler from "express-async-handler";

// POST
// url: "/postUserInfo"
export default asyncHandler(async function postUserInfo(req, res) {
	const userInfo = req.body;

	if (!Object.keys(userInfo)) {
		throw new Error("userinput not valid");
	}

	const { username, wpm, wordscount, time } = userInfo;

	if (!username | !wpm | !wordscount | !time) {
		throw new Error("all the fields are not valid");
	}

	const { clockTime, date } = getTodaysDateTime();

	// readexistindata
	const globalLeaderboardObj = await readFile(
		"../../data/globalLeaderboard.json"
	);

	const updatedUserInfo = { ...userInfo, clockTime, date };

	const updatedGlobalLeaderboardObj = [
		...globalLeaderboardObj,
		updatedUserInfo,
	];

	writeFile("../../data/globalLeaderboard.json", updatedGlobalLeaderboardObj);

	res.status(200).json({ message: "Added to the leaderboard", status: 200 });
});
