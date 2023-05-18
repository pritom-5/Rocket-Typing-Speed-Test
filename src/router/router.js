import express from "express";
import getHomePage from "../controller/getHomePage.js";

const router = express.Router();

router.route("/").get(getHomePage);

export default router;
