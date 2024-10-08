import express from "express";
import axios from "axios";
import cors from "cors";
import isYoutubeUrl from "./utitlities/validateUrl.js";
import downloader from "./utitlities/downloader.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json({ extended: false }));

// Enable CORS for all origins or specific origins
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
  })
);

// console.log("Welcome to youtube Downloader.");
// console.log("Input a url to begin");
// acceptYoutubeURL();

app.get("/", (req, res) => {
  res.json({ msg: "welcome to the youtube downloader API" });
});

app.post("/youtube/download", async (req, res) => {
  const { url } = req.body;
  try {
    if (isYoutubeUrl(url)) {
      const downloadResponse = await downloader(url);
      res.json(downloadResponse);
    } else {
      res.status(400).json({ msg: "Invalid youtube url" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

app.post("/api/v1/google/locator", async (req, res) => {
  const { location, token } = req.body;
  const { lat, lng } = location;

  if (token !== process.env.token) {
    return res.status(400).json({ msg: "Unauthorized Access" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=volunteer&location=${lat},${lng}&radius=10000&key=${process.env.googleAPIKEY}&type=volunteer`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.json({ msg: "Error getting position" });
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
