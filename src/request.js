import axios from "axios";
// const axios = require("axios");
// UrlRequest("");

const ApiRequest = (longUrl) => {
  axios
    .post("https://api-ssl.bitly.com/v4/shorten", longUrl, {
      headers: {
        Authorization: `Bearer 07c7b386d2e694682665af85ab6c08de2a7ec18d`,
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
