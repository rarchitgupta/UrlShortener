import React from "react";
import Clipboard from "react-clipboard.js";

const ShortenedUrl = (props) => {
  return (
    <div>
      <p id="shortenedUrl">{props.shortUrl}</p>
      <Clipboard data-clipboard-text={props.shortUrl}>Copy URL</Clipboard>
    </div>
  );
};

export default ShortenedUrl;
