import getDirectory from "../utils/getDirectory.js";

export default function getHomePage(req, res) {
	const pathToHomePage = getDirectory("../../../pages/html/index.html");
	res.status(200).sendFile(pathToHomePage);
}
