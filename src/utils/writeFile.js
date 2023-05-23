import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export default async function writeFile(filepath, dataObj) {
	const __filepath = fileURLToPath(import.meta.url);
	const __dirname = path.join(__filepath, filepath);

	const dataJson = JSON.stringify(dataObj);

	await fs.writeFile(__dirname, dataJson, "utf8");
}
