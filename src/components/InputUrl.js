import React from "react";

const InputUrl = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Enter URL to shorten</label>
      <input
        type="text"
        required
        value={props.longUrl}
        onChange={props.handleChange}
      />
      <button>Shorten</button>
    </form>
  );
};

export default InputUrl;
