import path from require('path')
import os from "os"
import youtubedl from "youtube-dl-exec";
import logger from "progress-estimator";

const loggerFunc = logger();

const downloader = async () => {
    try {
      const url = "https://www.youtube.com/watch?v=BCvD5FOH_5Q";
      const downloadsDirectory = path.join(os.homedir(), 'Downloads')
      const options = {
          cwd: downloadsDirectory,
          output: '%(title)s.%(ext)s'
      }
      const promise = youtubedl(url, options);
      const result = await loggerFunc(promise, `Obtaining ${url}`);
      console.log(result);
    } catch (error) {
      console.log("Error Downloading video");
    }
};

export default downloader;
