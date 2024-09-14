import youtubedl from "youtube-dl-exec";
// import logger from "progress-estimator";
// import acceptYoutubeURL from "./acceptYoutubeUrl.js";

// const loggerFunc = logger();

const downloader = async (url) => {
  try {
    const youtubeResponse = await youtubedl(url, { dumpJson: true });
    // const result = await loggerFunc(promise, `Obtaining ${url}`);
    // console.log(result);
    // console.log("Video downloaded successfully.");
    // acceptYoutubeURL();
    return youtubeResponse;
  } catch (error) {
    console.log("Error Downloading video");
    console.log("Try again later.");
    throw new Error("Error Downloading video, Try again later");
    // acceptYoutubeURL();
  }
};

export default downloader;
