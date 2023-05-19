import fs from 'fs'

function helper() {
	const text = fs.readFileSync("./text.txt", "utf8")
	const textArr = text.split(' ')
	const textArrObj = { textArr: [...textArr] }
	fs.writeFileSync("./text.json", JSON.stringify(textArrObj), "utf8")

}
helper()
