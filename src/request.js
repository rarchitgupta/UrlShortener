import axios from "axios";
// const axios = require("axios");
// UrlRequest("");

const ApiRequest = (longUrl) => {
  axios
    .post("https://api-ssl.bitly.com/v4/shorten", longUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BITLY_API_KEY}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.link;
    })
    .catch((err) => {
      return err.response.data.description;
    });
};

const UrlRequest = async (longUrl) => {
  const longurl = await ApiRequest(longUrl);
  return longurl;
};
export default UrlRequest;
