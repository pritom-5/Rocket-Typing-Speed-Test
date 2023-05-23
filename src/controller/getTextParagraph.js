import getText from "../utils/getText.js";

export default async function getTextParagraph(req, res) {
	const randomText = await getText(2);
	res.status(200).json({ text: randomText });
}
