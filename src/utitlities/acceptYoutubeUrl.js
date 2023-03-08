import readline from "readline";
import downloader from "../utitlities/downloader.js";

const acceptYoutubeURL = () => {
  const readlineInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readlineInput.question(`Enter youtube url: `, (url) => {
    downloader(url);
    //   readlineInput.close();
  });
};

export default acceptYoutubeURL;
