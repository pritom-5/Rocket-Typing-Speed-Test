import readFile from "../utils/readFile.js";

export default async function getLeaderboard(req, res) {
	const leaderboardData = await readFile("../../data/globalLeaderboard.json");
	console.log(typeof leaderboardData);
	res.status(200).json({ leaderboardData });
}
