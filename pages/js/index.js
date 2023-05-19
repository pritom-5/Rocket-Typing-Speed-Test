import { testBtn, retryBtn } from "./selectors.js";
import { getRandomText } from "./utils.js";

testBtn.addEventListener("click", getRandomText);
