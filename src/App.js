import React, { Component } from "react";
import InputUrl from "./components/InputUrl";
import ShortenedUrl from "./components/ShortenedUrl";

class App extends Component {
  constructor() {
    super();
    this.state = {
      longUrl: "",
      shortUrl: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ longUrl: event.target.value });
  }

  handleSubmit(event) {
    this.setState((prevState) => {
      return {
        shortUrl: prevState.longUrl,
      };
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <InputUrl
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          longUrl={this.state.longUrl}
        />
        <ShortenedUrl shortUrl={this.state.shortUrl} />
      </div>
    );
  }
}

export default App;
