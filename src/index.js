import express from "express";
import dotenv from "dotenv";
import router from "./router/router.js";
import getDirectory from "./utils/getDirectory.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

dotenv.config();
app.use(express.json());

const pagesFilePath = getDirectory("../../../pages");

app.use(express.static(pagesFilePath));
app.use("/", router);

// test hello
app.get("/api/hello", (req, res) => {
	res.send("hello there");
});

app.use("/api/", errorHandler);
app.use((req, res) => {
	res.redirect("/");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`server started at: ${port}`);
});
