import express from "express";
import getHomePage from "../controller/getHomePage.js";
import getTextParagraph from "../controller/getTextParagraph.js";
import postUserInfo from "../controller/postUserInfo.js";
import getLeaderboard, {
	getTodaysLeaderboard,
} from "../controller/getLeaderboard.js";

const router = express.Router();

router.route("/").get(getHomePage);
router.route("/api/getRandomText").get(getTextParagraph);
router.route("/api/postUserInfo").post(postUserInfo);
router.route("/api/getLeaderboard").get(getLeaderboard);
router.route("/api/getTodaysLeaderboard").get(getTodaysLeaderboard);

export default router;
