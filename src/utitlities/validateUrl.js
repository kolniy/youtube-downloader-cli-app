function isYoutubeUrl(url) {
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  return youtubeRegex.test(url);
}

export default isYoutubeUrl;
