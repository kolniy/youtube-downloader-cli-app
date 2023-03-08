import youtubedl from "youtube-dl-exec";
import logger from "progress-estimator";
import isYoutubeUrl from "./validateUrl.js";
import acceptYoutubeURL from "./acceptYoutubeUrl.js";

const loggerFunc = logger();

const downloader = async (url) => {
  if (isYoutubeUrl(url)) {
    try {
      const promise = youtubedl(url);
      const result = await loggerFunc(promise, `Obtaining ${url}`);
      console.log(result);
      console.log("Video downloaded successfully.");
      acceptYoutubeURL();
    } catch (error) {
      console.log("Error Downloading video");
      console.log("Try again later.");
      acceptYoutubeURL();
    }
  } else {
    console.log("Invalid youtube video");
    acceptYoutubeURL();
  }
};

export default downloader;
