import getRandomIndex from "./getRandomIndex.js";
import readFile from "./readFile.js";

export default async function getText(length) {
	const data = await readFile("../../data/text.json");

	const randomIndex = getRandomIndex(data.textArr.length, length);

	const slicedTextArr = data.textArr.slice(randomIndex, randomIndex + length);

	return slicedTextArr.join(" ");
}

// getText();
