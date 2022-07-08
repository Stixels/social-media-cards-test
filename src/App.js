import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = (api) => (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nytimes" />
          <meta name="twitter:creator" content="@SarahMaslinNir" />
          <meta name="twitter:title" content="Cards test" />
          <meta name="twitter:description" content="Quick media card test" />
          <meta
            name="twitter:image"
            content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
          />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
