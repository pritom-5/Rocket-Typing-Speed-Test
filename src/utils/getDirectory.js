import { fileURLToPath } from "url";
import path from "path";

// path will be joined from this directory. so calculate path from here.
export default function getDirectory(pathString) {
	if (typeof pathString !== "string") return;

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.join(__filename, pathString);

	return __dirname;
}
