import React, { Component } from "react";
import InputUrl from "./components/InputUrl";
import ShortenedUrl from "./components/ShortenedUrl";
import Header from "./components/Header";
import UrlRequest from "./request";

class App extends Component {
  constructor() {
    super();
    this.state = {
      longUrl: "",
      shortUrl: "",
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ longUrl: event.target.value });
  }

  handleSubmit(event) {
    this.setState((prevState) => {
      return { shortUrl: UrlRequest({ long_url: prevState.longUrl }) };
    });
    event.preventDefault();
    console.log(UrlRequest({ long_url: this.state.longUrl }));
  }

  render() {
    return (
      <div className="container">
        <Header />

        <div className="container mt-6 p-6">
          <InputUrl
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            longUrl={this.state.longUrl}
          />
          <ShortenedUrl shortUrl={this.state.shortUrl} />
        </div>
      </div>
    );
  }
}

export default App;
