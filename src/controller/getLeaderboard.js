import readFile from "../utils/readFile.js";

export default async function getLeaderboard(req, res) {
	const leaderboardData = await readFile("../../data/globalLeaderboard.json");
	const top20LeaderbaordData = leaderboardData
		.sort((a, b) => b.wpm - a.wpm)
		.slice(0, 20);
	res.status(200).json({ leaderboardData: top20LeaderbaordData });
}

export async function getTodaysLeaderboard(req, res) {
	const leaderboardData = await readFile("../../data/globalLeaderboard.json");

	const todayDate = new Date();
	const formattedTodayDate = todayDate.toLocaleDateString();

	const todaysLeaderboardData = leaderboardData
		.filter((item) => item.date === formattedTodayDate)
		.sort((a, b) => b.wpm - a.wpm);

	res.status(200).json({ leaderboardData: todaysLeaderboardData });
}
