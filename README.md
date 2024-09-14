# youtube-downloader-api-app

## Project Overview

A utility Node.js API application that allows users to download YouTube videos by providing the video URL.

### Features:

1. Users can pass a YouTube URL as a JSON object in the request body and receive downloadable video links in the response.
2. Exception handling is implemented for invalid or incorrect URLs.

## Getting Started

### 1. Clone the Project

Clone the repository to your local environment using the following command:

    git clone https://github.com/kolniy/youtube-downloader-cli-app.git

### 2. Install Dependencies

    Run the following command in the project directory to install all required dependencies:

    npm install

### 3. Start the Project in Development Mode

    Use the following command to start the application in development mode:

    npm run dev

### Using Postman

    To test the application via Postman, follow these steps:

    Use the POST method.
    Set the URL to localhost:4000/youtube/download.
    In the request body, add a JSON object like this:
    {
    "url": "https://www.youtube.com/watch?v=example_video_id"
    }
    Send the request, and you will receive a response with the downloadable video links.

    Notes:
    Make sure that the server is running before making requests in Postman.
    Invalid or malformed URLs will trigger exception handling, and you will receive an appropriate error message.
