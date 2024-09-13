import express from "express";
import isYoutubeUrl from "./utitlities/validateUrl.js";
import downloader from "./utitlities/downloader.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json({ extended: false }));

// console.log("Welcome to youtube Downloader.");
// console.log("Input a url to begin");
// acceptYoutubeURL();

app.post("/youtube/download", async (req, res) => {
  const { url } = req.body;
  if (isYoutubeUrl(url)) {
    const downloadResponse = await downloader(url);
    res.json(downloadResponse);
  } else {
    res.status(400).json({ msg: "Invalid youtube url" });
  }
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
