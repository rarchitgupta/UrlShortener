import React from "react";

const InputUrl = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label className="label mb-4">Enter URL to shorten</label>
      <div className="container">
        <div className="field is-grouped has-addons">
          <div className="control is-expanded">
            <input
              type="text"
              required
              value={props.longUrl}
              onChange={props.handleChange}
              className="input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-home"></i>
            </span>
          </div>
          <div className="control">
            <button className="button is-info">Shorten</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputUrl;
