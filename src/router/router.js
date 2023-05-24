import express from "express";
import getHomePage from "../controller/getHomePage.js";
import getTextParagraph from "../controller/getTextParagraph.js";
import postUserInfo from "../controller/postUserInfo.js";
import getLeaderboard, {
	getTodaysLeaderboard,
} from "../controller/getLeaderboard.js";

const router = express.Router();

router.route("/").get(getHomePage);
router.route("/getRandomText").get(getTextParagraph);
router.route("/postUserInfo").post(postUserInfo);
router.route("/getLeaderboard").get(getLeaderboard);
router.route("/getTodaysLeaderboard").get(getTodaysLeaderboard);

export default router;
