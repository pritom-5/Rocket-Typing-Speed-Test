export default function getRandomIndex(max, limit) {
	const randomIndex = Math.floor(Math.random() * (max-limit));

	return randomIndex;
}
