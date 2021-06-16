import React from "react";
import Clipboard from "react-clipboard.js";

const ShortenedUrl = (props) => {
  const shortUrl = props.shortUrl;

  if (shortUrl) {
    return (
      <div className="mt-5 level">
        <p id="shortenedUrl">{props.shortUrl}</p>
        <Clipboard
          data-clipboard-text={props.shortUrl}
          className="button is-primary"
        >
          Copy URL
        </Clipboard>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ShortenedUrl;
