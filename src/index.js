import express from "express";
import dotenv from "dotenv";
import router from "./router/router.js";
import getDirectory from "./utils/getDirectory.js";

const app = express();

dotenv.config();

const pagesFilePath = getDirectory("../../../pages");

app.use(express.static(pagesFilePath));
app.use("/", router);

// test hello
app.get("/hello", (req, res) => {
	res.send("hello there");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server started at: ${port}`);
});
