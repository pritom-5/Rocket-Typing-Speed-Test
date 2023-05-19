import express from "express";
import getHomePage from "../controller/getHomePage.js";
import getTextParagraph from "../controller/getTextParagraph.js";

const router = express.Router();

router.route("/").get(getHomePage);
router.route("/getRandomText").get(getTextParagraph);

export default router;
