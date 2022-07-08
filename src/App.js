import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Small Island Developing States Photo Submission"
          />
          <meta
            name="twitter:description"
            content="View the album on Flickr."
          />
          <meta
            name="twitter:image"
            content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
          />
        </Helmet>
        <header className="App-header">
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
