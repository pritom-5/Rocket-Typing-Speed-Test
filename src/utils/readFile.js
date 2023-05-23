import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export default async function readFile(filePath) {
	const __filepath = fileURLToPath(import.meta.url);
	const __dirname = path.join(__filepath, filePath);

	const dataJson = await fs.readFile(__dirname, "utf8");
	const dataObj = await JSON.parse(dataJson);
	return dataObj;
}
